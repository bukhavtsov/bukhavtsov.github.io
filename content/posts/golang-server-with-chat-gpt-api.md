---
title: "How to integrate Golang Service with Chat GPT API"
date: 2024-05-05T22:40:00+01:00
draft: false 
---
# How to integrate Golang Service with Chat GPT API.

## Intro
In this tutorial we're going to create a Golang service that communicates with Chat GPT API. The source code you can find [https://github.com/bukhavtsov/golang-server-with-chat-gpt-api](here). As a result you should be able to understand how to do it and change the logic for implementing your own use cases.

## Considerations
For implementing the solution we need to have:
1. API Key to Chat GPT API and at the moment Chat GPT doesn't provide free trial, so you'll have to setup your Open API account and pay [https://openai.com/api/pricing](X) per token. But for a pet project it's quite fair price in my opinion.
2. Golang installed.

## What we'll try to develop?
Essentially to get familiar with Chat GPT API we'll try to create a smart dictionary. As an input we'll send a http request with a lexical item and in response we get the meaning, examples of usages.
Architecture will consist of 2 components:
- Backend - Golang application with Echo web framework.
- Chat GPT API that Open AI provides.

![architecture](/images/architecture-server-with-gpt.png)

## How to run
1. Specify env variables `CHAT_GPT_API_URL` and `CHAT_GPT_API_KEY`
2. Start the server
```bash
go run ./cmd/main.go
```
3. Test with curl
```curl
curl localhost:8080/v1/translations/feasible
```

Response example:
```json
{
   "lexicalItem":"feasible",
   "meaning":"possible to do easily or conveniently",
   "example":"Given our limited resources, it may not be feasible to launch a new product at this time."
}
```

## Other materials:
- introduction to openai api: https://platform.openai.com/docs/introduction
- quick start with python: https://platform.openai.com/docs/quickstart?context=python
- check token price: https://platform.openai.com/tokenizer

## Bonus
If you want to dig deeper to this topic, watch the video!
{{< youtube bcJs56LmDCY>}}
