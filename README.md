# BagelBot Cart Resolver

Within bagelbot, to view the generated cart on toasttab (the balsam ordering site), you have to install the bagelbot cart resolver extension.

## Installation Directions

1. Clone the repo `$ git clone https://github.com/bagelbotdev/cart-resolver`
2. Navigate to `chrome://extensions`
3. Make sure "Developer Mode" is switched on (upper-right-hand corner)
4. Click "Load Unpacked" and select the cloned repo folder.

## Usage

The BagelBot cart resolver extension targets the Balsam Bagel online ordering portal [https://www.toasttab.com/balsam-bagels/v3](https://www.toasttab.com/balsam-bagels/v3). This extension allows you to specify a `cart` url parameter to the ordering portal. When a tab owner closes their tab with BagelBot, they are given a cartGuid. This extension allowes them to actually get an orderable cart from that cartGuid, by specifying it as the `?cart=` url parameter.


Slack `@tyler` with any questions.
