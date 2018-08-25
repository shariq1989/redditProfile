# A script that takes in a Reddit username and returns
# a list of subreddits where the user has posted,
# along with a list of subreddits where the user has commented.
# This helps me learn more about a user (AKA profile them)
# at a quick glance.

# FOR USE: replace ENTER_USERNAME with the Reddit username of the
# user you want to get to know more about.

import json
import time
import praw


def getProfile(user_id):
    with open('config.json') as f:
        config = json.load(f)

    reddit = praw.Reddit(client_id=config['RedditDevCredentials']['client_id'],
                         client_secret=config['RedditDevCredentials']['client_secret'],
                         user_agent=config['RedditDevCredentials']['user_agent'],
                         )

    # user to look up
    user_name = user_id  # get user profile
    user = reddit.redditor(user_name)

    start_fetching_time = time.time()
    submissions = user.submissions.top('all')
    comments = user.comments.new(limit=500)

    subreddit_list = {}

    for comment in comments:
        if comment.subreddit.display_name not in subreddit_list:
            subreddit_list[comment.subreddit.display_name] = 1
        else:
            score = subreddit_list[comment.subreddit.display_name]
            subreddit_list[comment.subreddit.display_name] = score + 1

    for submission in submissions:
        if submission.subreddit.display_name not in subreddit_list:
            subreddit_list[submission.subreddit.display_name] = 1
        else:
            score = subreddit_list[submission.subreddit.display_name]
            subreddit_list[submission.subreddit.display_name] = score + 1

    end_fetching_time = time.time()
    print("Submission & Comment collection:" + str("%.2f" % (end_fetching_time - start_fetching_time)) + " seconds.")
    print(subreddit_list)
    return json.dumps(subreddit_list);
