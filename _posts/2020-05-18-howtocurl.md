---
layout: post
title: "How to CURL"
date: 2020-05-18
---

The cURL utility is handy when you want to quickly explore a resource on the web such as an API or webpage.

```console
curl google.com
```

cURL comes installed by default in Windows 10 and macOS. So go ahead, open CMD and give it a whirl. Terminal, if you use macOS.

[Stripe's API reference](https://stripe.com/docs/api/authentication?lang=curl) is a good resource to explore.

If you have CMD open, copy paste into it this test Authentication API call.

> curl https://api.stripe.com/v1/charges --user sk_test_4eC39HqLyjWDarjtT1zdp7dc:

Take a look at the response. See if you can make sense of it.

## Public Datasets

Public datasets are another great resource to explore. The city of Seattle, for example, has an [Open Data Portal](https://data.seattle.gov/).

The Fremont Bridge Bicycle Counter is a popular dataset in this portal. It records the number of bikes that cross the bridge using the pedestrian/bicycle pathways

Try this.

> curl https://data.seattle.gov/resource/65db-xm6k.csv --output fremontbikedata.csv

The last bit _--output fremontbikedata.csv_ writes the dataset to a local CSV file which you can explore using Excel or similar tools. To download this in JSON, replace .csv with .json above.

## Wrangle It

If you want to wrangle the Fremont Bridge Counter's JSON dataset right in the command line, try [JQ](https://stedolan.github.io/jq/) or use its online equivalent [JQ Playground](https://jqplay.org/).

**Examples**

_Total number of rows_
> . | length

_When crossings across both sidewalks were less than 10_
> .[] | select(.fremont_bridge <= "10")

## Guides
- [Everything Curl](https://ec.haxx.se/) is an extensive guide for all things curl
- [jq Manual](https://stedolan.github.io/jq/manual/) for way more filter operations
