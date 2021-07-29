---
title: Kindly hold your ticket to buy happiness
date: "2021-07-25T14:40:32.169Z"
template: "post"
draft: false
slug: "kindly-hold-your-ticket-to-buy-happiness"
category: "Data"
tags:
  - "R"
  - "correlation heatmap"
  - "world happiness index"
description: "Philosophers from Aristotle to the Beatles have argued that money does not buy happiness. And it does seem to hold true for me. On my way seeking to answer this seemingly simple yet paralyzing profound question, I turned to science and came across the World Happiness Report."
socialImage: "/media/global_bubble_happiness.jpg"
---



Lately as quarter life crisis hits me hard, I’ve been engulfed in the awareness of inescapable impermanence desperately finding the meaning of life, defining my ultimate happiness. What could make me happy, truly, faithfully, and substantially that the inevitable death awaiting me does not destroy, then?

Philosophers from Aristotle to the Beatles have argued that money does not buy happiness. And it does seem to hold true for me. On my way seeking to answer this seemingly simple yet paralyzing profound question, I turned to science (by that I mean google around the internet, oh millennials!) and came across the [World Happiness Report](https://worldhappiness.report/), an annual renowned publication backed by United Nations. 

The report contains data about global happiness index, obtained using Gallup poster asking life satisfaction rating and group of social-economic factors such as economy, health, freedom, social support. This year they focus on unfolding the effect of COVID-19 on people’s life quality and satisfaction. 

I start with a quick glance through the data and notice that when a country rank higher on each factors, they tend to be happier. After applying some data cleaning and normalising, I tried to plot the relationship between GDP per capita versus their happiness score.

```python
library(ggplot2)

df1 %>%
  ggplot()  +
  geom_point(aes(x=economy, 
             y=happiness, 
             size=happiness,
             colour = factor(df1$continent),
            alpha=0.85))+
  scale_size_continuous(range = c(2, 15))  +
   scale_color_manual(values=c("#ffb3ba", "#babfff","#f7347a", "#ffa500", "#800000", "#ffb3ba","#ffa500")) +
   geom_vline(xintercept= max(df1$economy)/2, colour = "#f7347a", linetype = "longdash") + 
   geom_hline(yintercept= 5, colour = "#f7347a", linetype = "longdash") +
   my_theme() +
  annotate("text", x = 0.05, y = 5.1, family = "Helvetica", size = 2.7, color = "gray20",
           label = glue::glue("Lower GPD per capita ")) +
  annotate("text", x = 1.6, y = 5.1, family = "Helvetica", size = 2.7, color = "gray20",
           label = "Higher GDP per capita") +
  annotate("text", x = 0.75, y = 2.7, family = "Helvetica", size = 2.7, color = "gray20",
           label = glue::glue("Lower happiness")) +
  annotate("text", x = 0.75, y = 8, family = "Helvetica", size = 2.7, color = "gray20",
           label = "Higher Happiness") +
  annotate("text", x = 0.3, y = 2.75, family = "Helvetica", size = 4.0, color = "#f7347a",
           label = "South Sudan") +
  annotate("text", x = 1.37, y = 8, family = "Helvetica", size = 4.0, color = "#f7347a",
           label = "Finland")

  # labs(x = NULL, y = "Happiness ladder") +
```

The global average for both GDP and Happiness is at the centre of the quadrants. 

![global_bubble_happiness.jpg](/media/global_bubble_happiness.jpg)

![continent.jpg](/media/continent.jpg)

According to the chart, world’s happiest country in 2020 was Finland and the unhappiest country was South Sudan.

Countries like Hong Kong, Greece and Croatia have an above average GDP per capita but below average happiness score. All South America countries (except Haiti) have a high happiness score despite most having a below average GDP per capita.

Maybe money isn’t everything to everyone. 

What are other factors, then?

## Happiness's Explanatory Features

GDP: GDP per capita is a measure of Gross Domestic Product per its population.

Social: Social support of having friends and family assissting in times of need or crisis. Social support improves the quality of life and provides a buffer against adverse life events.

Health: Healthy Life Expectancy is the average timespan that a newborn can expect to live in “full health” — in other words, not hampered by disabling illnesses or injuries.

Freedom: Freedom of choice of individual’s opportunity and autonomy to perform an action selected from at least two available options, unconstrained by external parties.

Generosity: Residual of regressing the national average of responses to the question, “Have you donated money to a charity in past months?” on GDP capita.

Corruption/Gov Trust: The Corruption Perceptions Index (CPI), an index published annually by Transparency International since 1995, ranks countries “by their perceived levels of public sector corruption, as determined by expert assessments and opinion surveys.”

## Checking Out the Correlation Among Explanatory Variables

Though money doesn’t buy happiness, it seems to help. (An old paradox, [per The Economist](https://www.economist.com/graphic-detail/2019/03/21/economic-growth-does-not-guarantee-rising-happiness) ). As shown below, GDP, Health, and Support are strongly correlated with the Happiness score. Freedom correlates quite well with the Happiness score; however, Freedom connects quite well with all data. Corruption still has a mediocre correlation with the Happiness score.

![happiness-correlation.jpg](/media/corr_happiness.jpg)

The most intriguing suggestion in the World Happiness Report is that some links between covid-19 and happiness operate in both directions. The researchers do not suggest that happiness helps countries resist covid-19. Rather, they argue that one of the things that sustains national happiness also makes places better at dealing with pandemics. That thing is trust.

Below I looked into how countries globally, and in each continents are doing in terms of their social-economic well-being.

## Global
![global_happiness.jpg](/media/global_happiness.jpg)

## Europe
![europe_happiness.jpg](/media/europe_happiness.jpg)

## Asia
![asia_happiness.jpg](/media/asia_happiness.jpg)

## Americas
![americas_happiness.jpg](/media/americas_happiness.jpg)

## Africa
![africa_happiness.jpg](/media/africa_happiness.jpg)

## Oceania
![oceania_happiness.jpg](/media/oceania_happiness.jpg)

</br>

## Interesting resources

1. [“Yesterday, Today and Tomorrow,”](https://yesterday.nfb.ca/) an interactive “story” of the pandemic told via data visualization of people’s experiences, feelings and discussions during the crisis.
2. [The pandemic has changed the shape of global happiness, The Economist](https://www.economist.com/international/2021/03/20/the-pandemic-has-changed-the-shape-of-global-happiness) 

## ----

Thanks for reading! You can find [my R markdown code here](https://github.com/Rachelios/A-cup-of-tea-and-a-good-book/tree/master/happiness_UN).

These charts were produced quite a long time ago but I have been procrastinating on writing and publishing it 😅. While jotting down this article, I ran into Leo Tolstoy’s Confession:

“I understood that if I wish to understand life and its meaning, I must not live the life of a parasite, but must live a real life, and — taking the meaning given to live by real humanity and merging myself in that life — verify it”

I feel like several dots are at last connected. Ultimate life goal, happiness, might just be merely a byproduct of usefulness.

What makes me happy is when I’m useful. Okay, but how? When I was young I hoped I can make the world a better place, and these days waking up I wonder myself: “What am I doing for this world?” And the answer was nothing. And that same day, I started writing more on blog. I published all my notes and code in Github with hope people will learn a thing or two after reading them…

For people who are suffering life crisis, please step up. You can do anything, like painting, creating a product, supporting your family and friends, anything you feel like doing. And the most important, believe in yourself. Just do something useful. Anything.


<figure>
	<blockquote>
		<p>“I wish to you, joy and happiness. 
    </br>
      But above all this, I wish you: love”
    </p>
		<footer>
			<cite>— Whitney Houston</cite>
		</footer>
	</blockquote>
</figure>

*Originally published by [Rachel Le](http://heyiamrachel.com/) on [Medium](https://lenguyenbichngoc95.medium.com/shift-in-alcohol-consumption-ba14a24a10cf).*
