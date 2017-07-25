# -*- coding: utf-8 -*-
"""
Created on Mon Jul 24 21:46:35 2017

@author: hanying.ong.2015
"""

import pandas as pd

user_name_df = pd.read_csv('user_name.csv', sep = '\t')
recommendation_df = pd.read_csv('recom_for_new_user.csv', sep = '\t')
friend_list_df = pd.read_csv('friend_list.csv', sep = '\t')


