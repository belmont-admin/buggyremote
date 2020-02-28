# Remote control for the MOVE:mini buggy

## Step 1 - Decide the on messages needed

```blocks
    if (input.buttonIsPressed(Button.AB)) {
        // 1 = Forward
        radio.sendNumber(1)
```