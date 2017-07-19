# -*- coding: utf-8 -*-
"""
Created on Wed Jul 19 15:35:56 2017

@author: hanying.ong.2015
"""

import pandas as pd

import sqlite3

## open database
conn = sqlite3.connect('foursquare_v2.db')
c = conn.cursor()

c.execute('SELECT * from user_cluster_venue_info;')
results = c.fetchall()

df = pd.DataFrame(results)

df.columns= ['rid', 'uid', 'senti_score', 'spe_clus_id', 
             'kmn_clus_id', 'name', 'venue_type','venue_name']


df2 = pd.read_csv('dataset/bipartite_graph.csv', sep = ',')