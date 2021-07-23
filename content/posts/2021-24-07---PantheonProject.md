---
title: Those cultural accomplishments that shape the world.
date: "2021-07-24T22:40:32.169Z"
template: "post"
draft: false
slug: "those-cultural-accomplishments-that-shape-the-world"
category: "Data"
tags:
  - "R"
  - "polar coordinate"
  - "historical popularity index"
description: "Considering “practice makes perfect” is a popular cliché for human being in general, Aristotle syllogism above is particularly common for logic and analytical students. (right? 😶)"
socialImage: "/media/paris.jpg"
---


<figure>
	<blockquote>
		<p>If all As are Bs, 
      And all Bs are Cs,
      Then, all As are Cs..</p>
		<footer>
			<cite>— Aristotle syllogism.</cite>
		</footer>
	</blockquote>
</figure>

Considering “practice makes perfect” is a popular cliché for human being in general, Aristotle syllogism above is particularly common for logic and analytical students. (right? 😶)

In fact, Aristotle one of the greatest philosophers of all time and his teacher, Plato are regarded as the most notable historical figures in the world, according to Project Pantheon dataset that I am playing around with today.(https://www.kaggle.com/mit/pantheon-project)

This interesting dataset was introduced by MIT Media Lab as an attempt to quantify culture accomplishments that endows our species and shapes our world like it is today. Ultimately, Pantheon identifies and classifies famous historical figures via weighing upon Wikipedia pageview and editions, breaking down by cultural domains, languages, geographies and time period, and calculate a composite Historical Popularity Index. 

To follow through, you can either download the data from kaggle (https://www.kaggle.com/mit/pantheon-project) or simply read_csv using below code:

```python
pantheon_popularity_index <- read.csv("https://raw.githubusercontent.com/Rachelios/A-cup-of-tea-and-a-good-book/master/pantheon_popularity/pantheon_database.csv", stringsAsFactors=FALSE)

print(head(pantheon_popularity_index,5))
```

First few rows in the dataset:
![pantheon-data-preview.jpg](/media/pantheon-data-preview.jpg)

## Key Cultural Domains 

To deepen our understanding on the dataset, I sorted and selected 5 highest-ranked city by influence dominance according to the index, and placed a filter on the influencers whose Wikipedia profiles have been written in more than 30 languages to constraint and ensure importance level. 

```python
pantheon_i30 <- pantheon_popularity_index %>%
  filter(city %in% c('Rome', 'Paris', 'New York', 'Los Angeles', 'London', 'Tokyo'),
         article_languages>=30) %>%
  mutate(birth_year = (birth_year))
```

There are 7 key cultural domains:

![domain.jpg](/media/domain.jpg)

## Around the World

After the polar hclust chart that I’ve inspired to visualise by Hannah Yan in (alcohol Consumption), I seem to have an endless preference towards polar charts.

Today I will again plot this popularity index by country in bubble chart, with size of the bubbles indicating the magnitude of popularity index and coordinate them to a single node with the length of the lines indicating number of languages. 

![rome.jpg](/media/rome.jpg)

Interestingly, majority of records in Rome are in Institution category, probably due to its many Popes. 

![paris.jpg](/media/paris.jpg)
Paris, The City of Lights, in comparison has more influencing figures in Arts with notable people such as Voltaire, Louis XIV of France, Claude Monet.

![newyork.jpg](/media/newyork.jpg)

Not so surprised as a cultural diversified city, New York demonstrates cultural influence in all domains, from Humanities to Sports to Science & Technology. 

![london.jpg](/media/london.jpg)

London exerts a quite dominant of influence in Arts and Science and one of the cities with the most notable female figures while Tokyo is  the birthplace of historically renowned politicians and a Nobel-laureate writer.

![tokyo.jpg](/media/tokyo.jpg)

The key code that I used to plot: basically ggplot() and coord_polar()

```python
rome <- pantheon_i30_rome %>%
  ggplot()  +
  #historical_popularity_index/20
  geom_segment(aes(y = 0, 
                   x = birth_year, 
                   yend = article_languages, 
                   xend =  birth_year),
                   color = "lightgrey", size=0.5) +
  
  #use marginal border 
  geom_point(aes(x=birth_year, 
             y=article_languages, 
             size=historical_popularity_index/20 +0.4),
            
             col="white",inherit.aes = FALSE)  +             
  geom_point(aes(x=birth_year, 
             y=article_languages, 
             col=domain, 
             size=historical_popularity_index/20),
             alpha=0.85, inherit.aes = FALSE) +  ylim(-10,120) + 
  coord_polar() + facet_grid(.~city,switch="both") + 
  #geom_text(aes(label = city), x = 0, y = 0, hjust = 0.5, vjust = 2, size=4.5, fontface = "plain",family = "Poppins") +
  annotate("text", x = 0, y = 0, hjust = 0.5, vjust = 1.5, label="Rome", size=6, fontface = "plain",family = "Cinzel",inherit.aes = FALSE) +
  theme_void() + 
  my_theme() +
  #geom_text(data=pantheon_i50_rome, aes(x = 0, y = -18, label=city), colour = "black", alpha=0.8, size=4, fontface="bold", inherit.aes = FALSE) +
  scale_color_manual(values=c("#f7347a", "#ffdfba","#7408bb", "#bae1ff", "#800000", "#ffb3ba","#ffa500"))
```

<figure class="float-left" style="width: 400">
	<img src="/media/paris.jpg" alt="Paris">
	
</figure>

As next steps, it would be good to know how cities and countries have shifted in prominence and which region were the centers of science or arts in history.
<p>




.
.

</p>
<p>




.
.

</p>
<p>




.
.

</p>

## ----

Thanks for reading! You can find [my Rmarkdown code here](https://github.com/Rachelios/A-cup-of-tea-and-a-good-book/tree/master/pantheon_popularity).

*Originally published by [Rachel Le](http://heyiamrachel.com/) on [Medium](https://lenguyenbichngoc95.medium.com/shift-in-alcohol-consumption-ba14a24a10cf).*