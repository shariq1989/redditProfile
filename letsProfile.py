# A script that takes in a Reddit username and returns
# a list of subreddits where the user has posted,
# along with a list of subreddits where the user has commented.
# This helps me learn more about a user (AKA profile them)
# at a quick glance.

# FOR USE: replace ENTER_USERNAME with the Reddit username of the
# user you want to get to know more about.

import pprint
import praw
import operator
import time


user_agent = ("letsProfile")
r = praw.Reddit(user_agent=user_agent)
#user to look up
user_name = "ENTER_USERNAME"
#get user profile
user = r.get_redditor(user_name)

#GET USER SUBMISSIONS
start_sub = time.time()
submissions = user.get_submitted(limit=None)
sub_karma_by_subreddit = {}
for submission in submissions:
    subreddit = submission.subreddit.display_name
    sub_karma_by_subreddit[subreddit] = (sub_karma_by_subreddit.
                                         get(subreddit, 0)
                                         + submission.score)
sorted_sub = sorted(sub_karma_by_subreddit.items(), key=operator.itemgetter(1),reverse=True)
print("PRINTING SUMBISSION STATS")
pprint.pprint(sorted_sub)
end_sub = time.time()

print("------")
print("PRINTING COMMENT STATS")
print("------")

#GET USER COMMENTS
start_comm = time.time()
comments = user.get_comments(limit=None)
comm_karma_by_subreddit = {}
for comment in comments:
    comm_karma_by_subreddit[comment.subreddit.display_name] = (comm_karma_by_subreddit.get(comment.subreddit.display_name, 0)
                                     + comment.score)
sorted_comm = sorted(comm_karma_by_subreddit.items(), key=operator.itemgetter(1),reverse=True)
pprint.pprint(sorted_comm)
end_comm = time.time()

print("Collecting post info took " + str("%.2f" %(end_sub - start_sub)) + " seconds.")
print("Collecting comment info took " + str("%.2f" %(end_comm - start_comm)) + " seconds.")