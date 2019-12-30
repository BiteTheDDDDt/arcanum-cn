# base terms
```JSON
%item%
```
as of right now, every individual thing in a game is treated as an item. forwards, this will be used to display ambiguous items.

# general descriptors
```JSON
    %item%.buy
```
describes cost of initial unlock of item. 
generally used for skills, spells, potions and enchants.

```JSON
    %item%.cost
```
    describes cost of using/produsing items one time.

```JSON
    %item%.run
```
describes cost of keeping action active for 1 second. **Note** that if player can't support this cost, action will stop.
used for continious actions and skills.

```JSON
    %item%.effect
```
describes rewards of keeping action active for 1 second. **Note** that negative revard can drop target to 0, but will not stop on reaching it.
used for continious actions and skills.

```JSON
    %item%.result
```
describes reward of completing the action.
used for continious actions and skills.

```JSON
    %item%.mod
```
describes reward of getiing the item.
note that, unlike result and effect, mod are recalculated on load, so use this for things that not generally supposed to be spend.

```JSON
    %item%.reqire
```
condition that describes unlock reqierment.
**note** that item will still be unlocked if conditions will laiter become falce.
**note** that if it's not specified, and `need` is specifyed, `reqire` will copy need.

```JSON
    %item%.need
```
condition that describes use reqierment.
**note** that item will still be unlocked when not meerting this reqierment, but wouldn't be usable.

```JSON
    %item%.every.%n%
```
describes modification to `item` that happends every `n` times player have it.

```JSON
    %item%.at.%n%
```
describes modification to `item` that happends specifically when it used `n` times.

```JSON
    %item%.id
```
an identifier for an `item`.
it have to be unique. Avoid using spaces within it.

```JSON
    %item%.name
```
Name of item displayed ingame.
Avoid having names too long. 
**Note** that if `name` isn't specified, `id` will be used in it's place.

```JSON
    %item%.desc
```
string describing item, that will be displayed ingame.

```JSON
    %item%.flavor
```
string describing adding flavor text to be displayed.

```JSON
    %item%.max
```
maximal amount of this `item`.
generally used on skills, resources (including hp/stamina/manas) and furniture.

```JSON
    %item%.rate
```
passive income of `item`.
generally used on resources (including hp/stamina/manas) and furniture.
**Note** that it has different meaning for skills.

```JSON
    %item%.value
```
Current amount of `item`.
**Note** that `%item%` generally parses to this meaning.
**Note** for actions/spells/e.t.s - amount is times you complete it.

