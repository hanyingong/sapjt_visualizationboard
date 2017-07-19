# -*- coding: utf-8 -*-
"""
Created on Sun Jul 16 00:15:12 2017

@author: User
"""

import pandas as pd

# Read the CSV into a pandas data frame (df)
#   With a df you can do many things
#   most important: visualize data with Seaborn
df = pd.read_csv('D:\Google Drive\Github\sapjt_visualization\docs\dataset/bipartite_graph.csv')

# Or export it in many ways, e.g. a list of tuples
tuples = [tuple(x) for x in df.values]

data = [(str(x), str(y), int(z), int(q)) for x,y,z,q in tuples]
# or export it as a list of dicts
dicts = df.to_dict().values()


#to remove non alpha character from venue name

df2 = pd.read_csv('D:\Google Drive\Github\sapjt_visualization\docs\dataset/bipartite_graph01_table.csv')

import re

list = []
for i in range(len(df2)):
    x = re.sub(r'\W+', ' ', df2['venue_name'][i])
    list.append(x)
    
df2['new_name'] = list

df2.to_csv('bipartite_graph01_table_v2.csv',\
                         header = True, index= True, sep='\t', encoding='utf-8') 

