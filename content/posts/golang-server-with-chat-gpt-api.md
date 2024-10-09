---
title: "How to integrate Golang Service with Chat GPT API"
date: 2024-05-01T22:40:00+01:00
draft: false 
---
# How to integrate Golang Service with Chat GPT API.

{{< youtube bcJs56LmDCY>}}

## Intro
In this tutorial we're going to create a Golang service that communicates with Chat GPT API. The source code you can find [here](https://github.com/bukhavtsov/golang-server-with-chat-gpt-api). As a result you should be able to understand how to do it and change the logic for implementing your own use cases.

## Prerequisites
For implementing the solution we need to have:
1. API Key to Chat GPT API and at the moment Chat GPT doesn't provide free trial, so you'll have to setup your Open API account and pay [X](https://openai.com/api/pricing) per token. But for a pet project it's quite fair price in my opinion.
2. Golang installed.

## What we'll try to develop?
Essentially to get familiar with Chat GPT API we'll try to create a smart dictionary. As an input we'll send a http request with a lexical item and in response we get the meaning, examples of usages.
Architecture will consist of 2 components:
- Backend - Golang application with Echo web framework.
- Chat GPT API that Open AI provides.

## Architecture Overview

Our service will act as a smart dictionary. It will accept a lexical item (a word, phrase, or idiom) from the client and return the meaning and example usages of that item. There will be a single endpoint, which we will access via an HTTP request. The GoLang backend will send prompts to the ChatGPT API to fetch the results.

## Step 1: Set Up Your GoLang Project

We’ll be using GoLang’s built-in libraries along with the Echo web framework.

### Install the Echo Web Framework
To start, install Echo:
```bash
go get github.com/labstack/echo/v4
```

### Initialize the Echo Server
First, create a basic Echo server. Here’s how you can initialize the server and set up a logger to track application errors:

```go
package main

import (
    "log"
    "os"

    "github.com/labstack/echo/v4"
    "github.com/labstack/echo/v4/middleware"
)

func main() {
    e := echo.New()

    // Logger middleware
    e.Use(middleware.Logger())
    e.Use(middleware.Recover())

    // Define the route
    e.GET("/v1/translations/:lexicalItem", translateHandler)

    // Start the server
    err := e.Start(":8080")
    if err != nil {
        log.Fatalf("Server failed to start: %v", err)
    }
}
```

In this block, we set up the `/v1/translations/:lexicalItem` endpoint and use basic middleware for logging and error recovery.

## Step 2: Create the Translation Handler

Next, we’ll create the `translateHandler` function that will handle incoming translation requests:

```go
func translateHandler(c echo.Context) error {
    lexicalItem := c.Param("lexicalItem")
    if lexicalItem == "" {
        return c.JSON(http.StatusBadRequest, map[string]string{"error": "Lexical item wasn't provided"})
    }

    // Call the ChatGPT API to get the translation
    translation, err := translateByChatGPT(lexicalItem)
    if err != nil {
        return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to translate lexical item"})
    }

    return c.JSON(http.StatusOK, translation)
}
```

In this code, we retrieve the `lexicalItem` from the URL parameter and handle the request. If the parameter is empty, we return a `400 Bad Request`. If all goes well, we fetch the translation from ChatGPT.

## Step 3: ChatGPT Integration

To communicate with the ChatGPT API, we will create a function that sends a prompt and processes the response:

```go
func translateByChatGPT(lexicalItem string) (*TranslationResponse, error) {
    prompt := fmt.Sprintf(`Translate the lexical item "%s". Provide a response in JSON format with fields: lexicalItem, meaning, and example.`, lexicalItem)

    // Set up the request body
    requestBody, _ := json.Marshal(map[string]interface{}{
        "model":    "gpt-3.5-turbo",
        "messages": []map[string]string{{"role": "user", "content": prompt}},
    })

    req, err := http.NewRequest("POST", os.Getenv("CHATGPT_API_URL"), bytes.NewBuffer(requestBody))
    if err != nil {
        return nil, err
    }

    req.Header.Set("Authorization", "Bearer "+os.Getenv("CHATGPT_API_KEY"))
    req.Header.Set("Content-Type", "application/json")

    client := &http.Client{}
    resp, err := client.Do(req)
    if err != nil {
        return nil, err
    }
    defer resp.Body.Close()

    var gptResponse GPTResponse
    if err := json.NewDecoder(resp.Body).Decode(&gptResponse); err != nil {
        return nil, err
    }

    // Extract the translation response
    var translation TranslationResponse
    if err := json.Unmarshal([]byte(gptResponse.Choices[0].Message.Content), &translation); err != nil {
        return nil, err
    }

    return &translation, nil
}
```

Here, we send a JSON payload to ChatGPT, instructing it to translate the lexical item. The response is expected in JSON format, which we decode into our `TranslationResponse` struct.

### Response Structure
```go
type TranslationResponse struct {
    LexicalItem string `json:"lexicalItem"`
    Meaning     string `json:"meaning"`
    Example     string `json:"example"`
}

type GPTResponse struct {
    Choices []struct {
        Message struct {
            Content string `json:"content"`
        } `json:"message"`
    } `json:"choices"`
}
```

The `TranslationResponse` struct holds the lexical item, its meaning, and example usages.

## Step 4: Setting Up Environment Variables

Before running the service, set up the ChatGPT API credentials. Create a `.env` file with the following content:

```env
CHATGPT_API_URL=https://api.openai.com/v1/completions
CHATGPT_API_KEY=your-openai-api-key
```

Ensure you keep this file private and never expose it in public repositories.

## Step 5: Running the Application

To run the service locally, use the following command:

```bash
go run main.go
```

Now, you can make requests to the API using curl or Postman. For example:

```bash
curl http://localhost:8080/v1/translations/test
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

## Conclusion

We have built a GoLang service that communicates with the ChatGPT API to translate lexical items. You can extend this project by modifying the prompt or adding more functionality, such as caching or more endpoints.

Feel free to clone the code from my [GitHub repository](https://github.com/bukhavtsov/golang-server-with-chat-gpt-api) and experiment with it. If you have any questions, drop them in the comments below.
