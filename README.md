# Tower — a ladder with cash-out

Eight floors; four tiles each, one is a trap. Every floor survived multiplies
the pot by about 4/3; the player cashes out after any floor, or loses the
stake on a trap. Max 9.89×.

Cumulative payout after k survived floors, exactly (`ladderBp`):

    13200 · 17600 · 23466 · 31288 · 41718 · 55624 · 74166 · 98888 bp

RTP of stopping after floor k = ladderBp[k-1] · (3/4)^k, every stop ≤ 99 %:

    9900 · 9900 · 9899.72 · 9899.72 · 9899.88 · 9899.88 · 9899.97 · 9899.97 bp

The best stop bounds every strategy (the player learns only "survived so
far"), so the bet's RTP is 99.00 %. The panel (`/engine-sdk/ui.js`) draws Bet,
Next and Cash out; this bundle's `game.js` renders the tower and reveals each
floor the server drew.

    npx hbengine verify .                      exact RTP per stop, the mathHash
    npx hbengine init my-tower --template tower --slug my-tower   # make it yours, then: verify, dev, upload
# hb-game
