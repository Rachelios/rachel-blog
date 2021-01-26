---
title: What is Exploratory Data Analysis? (Part 1/3)
date: "2020-02-05T22:40:32.169Z"
template: "post"
draft: false
slug: "what-is-exploratory-data-analysis"
category: "Data"
description: "On the outside looking in, the perception is always that Data Science embraces powerful statistical and advanced machine learning techniques. Yet, to insiders, EDA is one of the most important and fundamental elements before digging deeper into any data set."
socialImage: "/media/image-3.jpg"
---

**Before we even get started** I think this blog is a place where I am going to be wrong quite a lot. (That’s not a positive note to start on hmm). I don’t like wrongness, however. I get a little freaked out every time I write and publish these blog articles.. 
On the internet, if you are creating something for other people and it is a purportedly factual thing, and if you are not just a total jerk there’s some kind of burden on you to make sure that what you are writing and communicating is correct.

And I guess that partly comes from just having an audience of people who are intentionally interested in or just coincidentally arrive and browse on the content that you have posted, you have to make sure that what you have shared is right. There is a chance that those people are then going to maybe tell what you wrote to other people and it sorta spreads. And if you have put out some incorrect piece of information, it is like you are making the world worse, and you need to grovel in humility and guilt before your audience. 

I was crash landing on earth in 1995, hoping to make it a better place. So I will try to minimise the inaccuracy as much as I possibly can.

*The inaugural topic* I shall begin writing my blog with is about Exploratory Data Analysis a.k.a EDA. 

On the outside looking in, the perception is always that Data Science embraces powerful statistical and advanced machine learning techniques. Yet, to insiders, EDA is one of the most important and fundamental elements before digging deeper into any data set.

“Torture the data, and it will confess to anything.”

— Ronald Coase

![Torture the data, and it will confess to anything.](/media/image-3.jpg)

## Exploratory Data Analysis (EDA)

Exploratory Data Analysis (EDA) is a technique of data analysis that its ultimate objective is to bring to light the information disguised in the dataset.

In short, EDA is “A first look at the data” which allows us to get closer to the certainty that the future results will be valid, correctly interpreted, and applicable to the desired business contexts. 

‘Bring to light the information disguised’ can refer to a number of things including but not limited to…

+ Summarising important variables and leaving behind useless variable.
+ Distinguishing outliers, missing values, or human error.
+ Understanding and visualising the relationship(s), or lack of, between variables
+ Ultimately, becoming intimately versed in with the relevant high-level characteristics of a data set

Here is why this is important.

Fairly similar to finance where we have the accounting method FIFO/LIFO (stands for first in; first out/ last in; first out), in Data Science we have established the phrase GIGO that you may have heard of. They literally mean “garbage in, garbage out”.

With EDA, it’s more like, “garbage in, perform EDA, possibly garbage out.”

By conducting EDA, you can revolve an almost usable dataset into a completely usable dataset.

I’m not saying that EDA can make all dataset clean in a beautiful or delightful way — that is not true. However, applying EDA techniques is a therapy to treat some common problems that are present in every dataset. 

<figure>
	<blockquote>
		<p>Torture the data, and it will confess to anything.</p>
		<footer>
			<cite>— Ronald Coase.</cite>
		</footer>
	</blockquote>
</figure>

### Methods of Exploratory Data Analysis

EDA is generally classified into two methods, non-graphical or graphical. And each method can be majorly performed using the following techniques:

+ Univariate visualisation — provides summary statistics for each field in the raw data set
+ Bivariate visualisation — is performed to find the relationship between each variable in the dataset and the target variable of interest
+ Multivariate visualisation — is performed to understand interactions between different fields in the dataset
+ Dimensionality reduction — helps to understand the fields in the data that account for the most variance between observations and allow for the processing of a reduced volume of data.

In the next part of the article, we’ll take a look at the first two techniques – two fundamental and rudimentary approaches that deal with every aspect of Exploratory Data Analysis.

```css
#header h1 a {
  display: block;
  width: 300px;
  height: 80px;
}
```



![Test SVG](/media/cpu.svg)
