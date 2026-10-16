# AI Workbench for Leaders

A lightweight web app that turns a project brief into a role-specific AI workflow
for product designers, web designers, CPOs, and CTOs.

The project is based on one idea: professionals who learn to use AI effectively
can improve how they explore, plan, review, and communicate their work.

## Features

- Role-aware prompts for four product and technology roles.
- Four output types: plan, review, ideas, and specification.
- Prompt-only mode works without an AI API key.
- Optional response generation through OpenRouter.
- API keys stay on the server and are read from environment variables.
- Brief length validation and safe text rendering in the browser.
- Python unit tests for prompt construction.

## Requirements

- Python 3.10 or later
- `pip`

## Quick start

```bash
git clone https://github.com/swordenkisk/ai-workbench-for-leaders.git
cd ai-workbench-for-leaders
chmod +x setup.sh
./setup.sh
source .venv/bin/activate
python app.py

Open http://127.0.0.1:5000 in your browser.

Enable AI generation
Create an OpenRouter API key.
Open .env.
Set OPENROUTER_API_KEY to your key.
Optionally change OPENROUTER_MODEL to a model available to your account.
Restart the app.
Without a key, the app still creates a complete prompt that can be copied into
another AI tool.

Never commit .env or place an API key in browser-side JavaScript.

Run tests
bash


source .venv/bin/activate
python -m unittest discover -s tests
Project structure
text


app.py                  Flask routes, prompt builder, optional provider call
templates/index.html    Main application page
static/app.js           Form submission and copy actions
static/styles.css       Responsive interface styles
tests/test\_prompts.py   Prompt builder tests
Deployment notes
This starter runs locally and binds to 127.0.0.1. For production, run Flask
behind a production WSGI server and configure HTTPS, secret management, request
limits, and appropriate logging for your hosting environment.

AI output can be incomplete or incorrect. Review recommendations before using
them for product, design, security, or engineering decisions.