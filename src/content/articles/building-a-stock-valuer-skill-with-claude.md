---
title: "Building a Stock-Valuer Skill with Claude"
date: 2026-11-24
category: "Finance"
description: "A custom Claude skill that values a single stock against a set of personal criteria and returns a one-page buy, sell, or hold report."
---

## What it does

Stock-valuer is a skill I built with Claude that values a single stock and tells me clearly what to do with it. I type something like "/value-stock Nvidia", and it researches the company on the web, checks it against a set of criteria I wrote myself, and sends back a one-page PDF report.

<figure>
  <img src="/images/stock-valuer/value-stock-prompt.jpg" alt="Typing /value-stock Nvidia into Claude" />
  <figcaption>Kicking off a report with a single command.</figcaption>
</figure>

The report opens with one of five ratings: Strong sell, Sell, Hold, Buy or Strong buy. Each one comes with a time period in which to act, a date to review the call, and a short explanation of why that decision was reached. Below that sit a pie chart of where the company's revenue comes from, a chart of its share price over the past year, and a section for each part of my criteria, with sources listed at the bottom.

<figure>
  <img src="/images/stock-valuer/lloyds-report.jpg" alt="Example stock-valuer report for Lloyds Banking Group, rated Hold" />
  <figcaption>An example report — a Hold rating for Lloyds Banking Group.</figcaption>
</figure>

## The criteria I used

Before any code was written, I set down the questions I think matter most when deciding whether a stock is worth owning. They fall into three groups.

### 1. Do I understand how the company operates?

This first question comes from Warren Buffett's rule of only investing in businesses you understand. If I can't explain what a company does, I shouldn't own it. The skill writes a short bio covering what the company does, how it operates and which revenue streams create the most profit, shown as a pie chart. It then looks at the company's competitive edge: what sets it apart from other companies in the same market.

### 2. Analytics

The numbers show how a company is performing and can hint at where its share price is heading. The skill checks four things:

- The P/E ratio, to judge whether the company is over- or undervalued, or whether a high P/E simply reflects a leader in a competitive market.
- Its debt: what form it takes, whether it is good or bad, and how it will affect earnings in the coming quarters.
- Where the stock has opened and closed over the past year, what trend that shows, and how easily the price is moved by events such as wars or the actions of board members.
- Whether the company is on track to hit its earnings target this quarter, and if so, whether that is common knowledge and already priced in. Equally, weak earnings now might mean the stock is undervalued because it is likely to bounce back.

### 3. Popular sentiment

Markets run on people as much as numbers. For news, the skill relies on Reuters, Bloomberg, the BBC, the FT and the WSJ, and runs a final sweep of the last 48 hours just before scoring so nothing recent is missed. Because headlines show tone rather than measure it, it also checks analyst ratings and price-target changes, short interest and unusual trading volume. It looks for big moves by key people, such as a CEO stepping down or illness at the top, but only when a reputable outlet has reported them. Finally, it looks at government: how legislation has changed what the company can and cannot do, and how that will affect its earnings.

Each group is scored positive, neutral or negative, and the three scores are combined into the final rating. A single serious red flag can pull the rating down a level, while good news that everyone already knows about can't push it up on its own.

## Putting it to the test

To find out whether the skill actually works, I'm testing it on a new stock simulator on Investopedia, starting with $100,000 of virtual money. Every trade will be based on a stock-valuer report: I'll only buy or sell when the skill gives a rating, and I'll act within the timeframe it sets.

The first company I've run through it is Nvidia.

Keeping every report gives me a record of each decision and the reasoning behind it. Looking back, I'll be able to see where the skill got things right and where it went wrong. If a pattern of bad calls shows up, I'll adjust the criteria and the rating rules.
