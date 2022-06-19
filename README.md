# Pillbox typescript project

## Description

It simulates a Pillbox view for a farmaceutic e-commerce. The Pillbox shows the
remaining medicines in client's inventory and how much time the pills will last,
also you can buy more pills if you think that need more.

With axios we will be getting a list with client's purchases and receive time,
which we can use to calculate how many pills the client has right now. Also
we can get the products list to show the medicine name, brief description and
image.

## Features

* List component that shows remaining medicines in Pillbox.
* Data is retrieved using axios.
* For each different medicine we will have a component that will show a brief
detail of the medicine, the remaining pills and remaining days for the pills to
run out.
* Each Medicine component will have a button to simulate an add to cart button.

## Usage

1) Install dependencies:

```bash
npm i
# or
yarn install
```

2) Create **.env.local** file. You can copy it from **.env.example** and change the
variables.

3) Run the development server:

```bash
npm run dev
# or
yarn dev
```

## Optional

Alternatively, if you like, there is a page in [Vercel](https://pastillero.vercel.app) to see it online.
