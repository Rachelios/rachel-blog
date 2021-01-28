---
template: post
title: What is Exploratory Data Analysis? (Part 2/3)
slug: what-is-exploratory-data-analysis-part-2
socialImage: /media/image-0.jpg
draft: false
date: 2020-02-06T22:40:32.169Z
description: We will explore the Super Heroes Dataset from Kaggle which includes
  two csv files to conduct Explanatory Data Analysis (EDA).
category: Data
tags:
  - Data Analysis
  - Data Science
  - Python
  - Visualisation
---
## Univariate and Bivariate Visualisation

We will explore the Super Heroes Dataset from Kaggle which includes two csv files to conduct Explanatory Data Analysis (EDA):

* ‘heroes_information.csv’ describes the characteristics of each Super Hero, which will be read into ‘info_df’ dataframe.
* ‘super_hero_powers.csv’ describes what superpowers each hero has, which will be read into ‘powers_df’ dataframe.

**All the work in this article was carried out in a Jupyter Notebook with the following libraries:** 

```python
#Import Libraries
import numpy as np
import pandas as pd
import matplotlib.pylab as plt
import seaborn as sns
```



![Nulla faucibus vestibulum eros in tempus. Vestibulum tempor imperdiet velit nec dapibus](/media/image-0.jpg)

## Understanding variables

Firstly, I like to get started by grabbing some primarily view of the dataframe by using the following line:

```ipynb
##Understanding my variables
df.shape
df.head()
df.columns
```

Hence, right away we can see:

**.shape** returns the output of (734, 11) for ‘info_df’ dataframe for example. These are number of rows by the number of columns, meaning the dataset of ‘heroes_information.csv’ has 734 rows and 11 columns.

**.head** returns the first 5 rows of the dataset.

**.columns** returns the name of all columns in the dataset.

Immediately, I noticed an irrelevant column ‘Unnamed: 0’ that we can most likely safely drop. That leaves us with 10 total variables.

You will see how I dealt with dropping a variable in the next section. I still wanted to get a better understanding of my variables by checking if there is missing data.

```python
#check for null values
info_df.isnull().sum()
```

While this gives us somewhat an understanding on missing data, it is still not yet sufficient.

From the quick view of .head() up there, we can easily spot out that the Skin Color column contains dash values, which Python technically does not interpret as null values. This again, reaffirms that visual inspection of the data is important.

### Cleaning up the dataset

a. Eliminate redundant variables

Below is how I  drop the irrelevant variable:

```python
#replace dash with NaN
info_df['Skin color'].replace('-', np.nan, inplace=True)
#drop variable
info_df = info_df.drop(['Unnamed: 0'], axis=1)
```

b. Dealing with missing/invalid/outlier data 

```python
#replace dash with NaN
info_df.replace('-', np.nan, inplace=True)

# get rid of NaN values for publisher
info_df.Publisher.fillna('Other', inplace=True)

# -99 is not a valid height or weight so set to NaN
info_df.replace(-99.0, np.nan, inplace=True)

#update genders if NaN
info_df.Gender.fillna('Non-Binary', inplace=True)

#update alignment if NaN
info_df.Alignment.fillna('None', inplace=True)
```

And that’s it for today! In the third part, I will cover the third element in EDA: exploring the relationship between variables through visualisations.