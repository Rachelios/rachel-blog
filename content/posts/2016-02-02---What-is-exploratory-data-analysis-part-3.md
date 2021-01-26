---
title: "What is Exploratory Data Analysis? (Part 3/3)"
date: "2020-02-07T22:40:32.169Z"
template: "post"
draft: false
slug: "what-is-exploratory-data-analysis-part-3"
category: "Data"
tags:
  - "Data Analysis"
  - "Data Science"
  - "Python"
  - "Visualisation"
description: "We will cover the third elements of EDA: exploring relationships between variables (univariate/ bivariate) by revisiting the Super Heroes dataset in this post."
socialImage: "/media/image-0.jpg"
---

## Quick recap from my previous posts

At an attempt to serve the article as an extensive crash course on some of the most foundational and expository concepts of EDA, I have thus ended up in a lengthy piece of work ?.

So I have split this into 3 parts so that you can through this bit by bit.

In the last post, we went over the first two points of:

+ Understanding variables
+ Cleaning up the dataset
+ Exploring relationships between variables

We will cover the third elements of EDA: exploring relationships between variables (univariate/ bivariate) by revisiting the Super Heroes dataset in this post.

Now hold my hand and let’s dive into it!


## Correlation Matrix

For the first touch in analysing my variables, I usually visualise it by calling out a correlation matrix. This is very helpful to develop a general view of all the variables, as it shows the correlation coefficients between them.

As much bulky as the word ‘correlation matrix’ has given the impression, seaborn’s heatmap, on the other hand, has made a great job in visualising the matrix.

We can see that there is a not significant correlation between weight and height.

```css
#Calculate correlation matrix
corr = info_df.corr()
# plot the heatmap
sns.heatmap(corr, xticklabels=corr.columns, yticklabels=corr.columns, annot=True,
                  cmap=sns.diverging_palett(220, 20, as_cmap=True))
```


## Bar Plot

Bar charts are arguably one of the most common visualisations when it comes to data. A bar chart is a type of graph which shows comparisons among discrete categories along with the two axes, giving you a quick understanding on the dataset.

```css
#plot number of superheros by gender
sns.set_palette("husl")
sns.countplot(x='Gender', data=info_df);

plt.title('Superheros by Gender')
plt.ylabel('Number of Superheros')
plt.show();
```
Notice there are many more males than females and many more females than non-binary.

And even deeper understanding:



```css
#r#plot number of superheros per publisher
sns.countplot(x="Publisher", data=info_df)
plt.title('Number of Superheros by Publisher')
plt.ylabel('Number of Superheros')
plt.xlabel('Publisher')
plt.xticks(rotation = 90)
plt.show();
```



```css
#create new dataframe with only small publishers with < 200 superheros
counts = info_df.Publisher.value_counts()
small_publishers_df = info_df.loc[info_df['Publisher'].isin(counts[counts < 200].index), :]
small_publishers_count = small_publishers_df.Publisher.value_counts()
#plot only the small publishers
sns.countplot(x="Publisher", data=small_publishers_df)
plt.title('Number of Superheros by Small Publisher')
plt.ylabel('Number of Superheros')
plt.xlabel('Publisher')
plt.xticks(rotation = 90)
plt.show();
```



## Pair plot


```css
#plot height and weight by gender
sns.pairplot(data=info_df, hue='Gender', size=5)
plt.title('Superhero Heights and Weights by Gender')
plt.show();
```



## Box Plot

Another way to visualize the distribution of a variable is a boxplot. We’re going to look at the number of powers for each bucket of superhero as an example.

```css
#plot number of powers by Alignment
sns.boxplot(x=merged_df.Alignment, y=merged_df.sum_powers, hue=merged_df.Gender)

plt.title('Number of Powers per Superhero by Alignment')
plt.xlabel('Alignment')
plt.ylabel('Number of Powers')
plt.show();
```

Boxplots are not as intuitive as the other graphs shown above, but it communicates a lot of information in its own way. The image below explains how to read a boxplot.


As such, you can see that there are a number of outliers in terms of number of powers for the Good Superheroes, and that most of the Good Superheroes have at least 5 or more super powers.

## Word Cloud

```css
#create a word cloud of superheros with the most powers
from wordcloud import WordCloud

#remove spaces in between name parts - wordcloud splits on whitespace
heronames = most_powers['hero_names'].str.replace(' ', '')

wordcloud = WordCloud(max_font_size=50, 
                      max_words=100, 
                      background_color= 'white').generate(str(heronames.head(15)))
plt.imshow(wordcloud, interpolation='bilinear')
plt.axis('off')
plt.show()
```



Okay, claiming the article to be extensive, this, however, does not completely cover all the thing related to EDA (that would be impossible). And no, this should not be the only resource that you use to develop your knowledge and skills…

HAVING SAID THAT, if you are new to the field and would like to find something easy to follow, then this will help you develop a good understanding of the basics of data analysis. And if you have some understanding of data analysis, this serves as a compact crash course to be used as a refresher, hone your knowledge, and/or identify gaps in your knowledge.

As always, I hope you find this valuable and practical and wish you the best of luck in your data science endeavours!