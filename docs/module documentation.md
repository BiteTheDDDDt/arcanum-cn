***__!!! INCOMPLETE !!!__***  
# Document Information
Written by:
 - mindedness

Last updated: Unstable 0.10.11.12

# Terminology
## Game Tick (also known as tick)
Game tick is the minimum time the game waits before doing another game update, normally measured in milliseconds.  
In arcanum, the game tick is 150ms (located in [game.js, line 23](../src/game.js#L23)).  
Note: Game tick and time difference between game updates can differ. Time difference is capped between 0s and 1s.

## Gdata - Game Data  
Refers to any data (such as weapons, monsters, and stats) that are added into the game via data modules.

## Regex - Regular Expression  
Short Version: A special string used for matching patterns in other strings.  
Some useful sites for learning and working with regular expressions:  
 - [Wikipedia](https://en.wikipedia.org/wiki/Regular_expression) - Has a lot of informaion about regex.  
 - [Regex101](https://regex101.com/) - Has tools for working, testing, and explaining regex.  
 - [Regexr](https://regexr.com/) - Another website with tools for working, testing, and explaining regex.  

For more information about regex, look it up on Google.  
Note: As Arcanum runs on Javascript, be aware that there may be some slight differences in handling versus regex used in other coding languages.

## Wearables - Equipment
Wearables is what the equipment class is called in the code for Arcanum.

# Properties
List of general properties used within each category, and general description for each one.  
Certain properties will differ in usage, or may be for a specific category. 
If so, the property will be listed under that particular category as well.

## Id
Type: String  

Format: 
 - Must have no periods. 
 - Should only contain alphanumeric, hyphen, or underscore characters.
 - If it is derived from the name, spaces should be replaced with underscore.

Other important notes: 
 - Required
 - Must be unique
 - The prefix of 'untag_' is reserved for special targeting of tagSets within mods. Do not use this for object Ids.

Used to uniquely identify any item within the game.   
Must be unique, otherwise an item may overwrite another item or may be overwritten by another item.

## Name
Type: String

Display name for an item.   
If an item does not have a `name` property, [id](##-id) is typically used instead.

## Desc
Type: String

Provides useful information about an item, or describes an item.  
Displayed in the popup tooltip of items like [tasks](##-tasks) or [resources](##-resources).  
Otherwise, unused for those that do not have tooltips.

## Flavor
Type: String

An item descriptor meant for humerus dialogue related to item.  
May contain easter eggs, inside jokes, references, memes, or even insight to how unfunny the module's writer was.  
Displayed in the popup tooltip of items like [tasks](#-tasks) or [resources](#-resources).  
Otherwise, unused for those that do not have tooltips.

## Require
Type: String

Format: Must follow one of the following
 - Exact id of another item
 - [JS syntax](##-js-string-syntax), using [g](###-game), [i](###-item), and [s](###-state) as passed in object variables.

The `require` property is used to define when an item can show up, or can be displayed.  
When `require` matches the id of an item, it checks if the referenced item listed is unlocked to determine when the item itself should unlock.  
If the game cannot match the syntax to any game item, the game assumes that `require` is using [JS syntax](##-js-string-syntax), turns `require` into a function, and runs the function during game tick updates.  
Result of the function is treated as a boolean.  
The `require` property is only checked until it is fulfilled; once fulfilled, the item stays unlocked, even if later on

Note: If `require` does not reference a game item id while being a function, it may not be called.  
Game parses `require` function strings to check for item ids so that it can be added to a list to check against items updated each game tick, so that it doesn't have to check all `require` functions every game update, but also means it may not check the ones that don't use item ids.  

## Mod
Type: Object (`<String, Number>`, `<String, String>` or `<String, Object>`)

Format:
 - Key-value pairs must have an item id as the key with one of the following values:
    - a number
    - an object
    - a [mod string](###-mod-strings)
 - If the value is an object:
    - the key should be one of the following possible properties on the referenced game data:
       - one of the [mod properties](##-mod-properties).
       - one of the [stat properties](##-stat-properties).
       - an object property with a value that follows the same pattern.
    - nested property values should eventually result in a number or [mod string](###-mod-string) value.

A `mod` property holds information on how an item modifies other items based on its own value and the mod's multipliers.  
For more information about how Mods are handled in the game, see [mod properties](##-mod-properties)

## Level
TODO incomplete.  
Type: Number

`level` has a various different uses depending on what category it is used in.  
In a majority of the use cases, `level` is used to calculate default values for cerain undefined properties.
 - Used to indicate how much space it takes up in relevant cases.
 - Adventures use `level` to determine the length of an adventure when [length](##-length) isn't specified.
 - When [spawns](##-spawns) isn't specified, `level` determines what spawns in an adventure
 - loot
 - skill xp
 - monster base stats
 - monster purchasing
 - spell arcana cost
 - dot level via source
 - npc stats (dodge)
 - npc purchase cost
 - wearable's level upon reviving (through the template's & material's level)

 - loot from monster with general loot table
 - material and wearable generation for general loot
 - sell price (5 * level)
 - dot comparison for replacement or extension
 - enchant max reduction upon applying enchant

## Cost
Type: Number or Object (`<String, Number>`, `<String, String>` or `<String, Object>`)

Format:  
 - Any numbers should be non-negative.
 - Objects must be [reference objects](##-reference-objects)
 - An object's key-value pairs must have an item id as the key with the value being one of the following:
    - a number
    - a [function string](##-js-string-syntax) using [g](###-game), [a](###-actor), and [c](###-context)
    - an object
 - For nested objects,
    - A key must be a known property of the GData/property that is used as the object's key pair in it's parent object.
    - The value's type must follow the same pattern stated above.
    - Nested objects must eventually end with the key referring to a numeric or [stat](##-stat) property, with the value being either a number or a [function string](##-js-string-syntax) as listed above.

`cost` is the cost tied to doing anything with a game item.  
When `cost` is a number, it is used as the gold cost for an item.  
Should not be confused with [buy](##-buy), as `buy` is a one time cost to be able to use the item, and the item is not used when `buy` is paid, whereas `cost` is paid every time an item is used.  
`cost` is paid *before* using an item, and used items that rely on value would apply changes next game update.

## Tags (Property)
Type: String or Array (`<String>`)

Format:
 - Tags listed must refer to a [TagSet](##-tagset), or, in the case that a new tag is begin defined in `tags`, it must adhere to [id](##-id) restrictions. 
 - Strings with multiple tags must be seperated by "," with no spaces.

The `tags` property is to label an item in order to group items with the same tags.  
`tags` are special in that if any [Tagset](##-tagset) they are referring to isn't in the game, the game will generate that Tagset automatically.  
This means that the tag doesn't have to be defined in the [tags category](##-Tags-(Category)) in order to be added in-game (though they will be given default values).  
Any tag created from the `tags` property with the "t_" prefix will have the prefix removed in their `name` property (but remains unchanged in the `id` property).

## Result
Type: String, Array (`<String>` or `<Object>`), or Object (`<String, Number>`, `<String, Boolean>`, or `<String, Object>`)

Format:
 - String values 
 - [Object Targetting]

 ## Convert
Type: String, Array (`<String>` or `<Object>`), or Object (`<String, Number>`, `<String, Boolean>`, or `<String, Object>`)

Format:
 - String values 
 - [Object Targetting]

 Convert comes in 2 parts, "Input" and "Output", the convert property itself serves as a container for them and does nothing.

 ### Input

 Format: same as [Cost](##-Cost)

 Input values are deducted every game tick, scaled by ticks elapsed, as long as [Output](###-Output).effect has things to fill OR if Output.mod is present.
 If a convert property is present, the Input section is mandatory.

 ### Output

 Divided into Output.effect and Output.mod
 Format: same as [Effect](##-Effect)
 Format: same as [Mod](##-Mod)

 Output.effect works the same as Effect definition, but only if the Input was paid. Output.effect does nothing if all listed items are full.

 Output.mod works the same as Mod definiton, except applying modifiers to it is not currently supported and it only provides the alterations if Input is paid. If input is not paid, the modifications are removed until it can be paid again.
 If a convert property is present, the Output section is mandatory.

 ## Caststoppers
Type: Array (`<String>` or `<Object>`)

Format:
 - String values 
 - [Object Targetting]

 An array of state flags that would prevent the relevant spell from being able to be cast.
 Numbers are based on flags in states.js and are binary flags.
 Common numbers:
 4 - NO_SPELLS also known as "silence". By default any spell that does not have caststoppers explicitly defined will have this as a caststopper.
 1 - NO_ATTACK also known as "entangle". For things that are physical attacks.

 ## Result
Type: String, Array (`<String>` or `<Object>`), or Object (`<String, Number>`, `<String, Boolean>`, or `<String, Object>`)

Format:
 - String values 
 - [Object Targetting]
# Armors
# Classes
# Dungeons
# Enchants
# Encounters
# Events
# Furniture
# Homes
# Locales
# Materials
# Monsters
# Player
# Potions
# Properties
# Rares
# Reagents
# Resources
# Sections
# Skills
# Spells
# States
# Stats
# Stressors
# Tags (Category)
Tagsets are listed under tags.  
They are not necessary to declare, as tags will be generated automatically once listed in [tags](##-tags), but are used to apply additional properties.

They currently use only [id](##-id) and [name](##-name) from general properties.

## Hide
Type: Boolean
Default Value: False

Determines if the tag is shown in an item's popup window under tags.
Does not hide the item when listed under other properties.

# Tasks
# Upgrades
# Weapons

# Related Information
## Mod Properties
Currently, mods are intended to only originate from an item, and can only use an item's value property as the initial source (and not other properties, like max or rate), so mods on inner non-mod properties may not work as intended.

## Reference Objects
Note: Tentative name. If anyone has a better name, please suggest it.
A reference object is an object that describes what specific gdata properties (or nested properties) are affected and by how much.

Reference objects have the following format:
 - The outermost keys must refer to the id of a gdata item (will now be referred to as target) stored in the game. 
 - Nested reference objects' keys must be known properties of the targetted object referred to in the parent reference object.
 - Unless stated otherwise, the related value for any key must result in a nested reference object, a number, or a [function string](##-js-string-syntax), typically using [g](###-game), [a](###-actor), and [c](###-context).

## JS String Syntax
A Javascript string is a string that is parsed into a function that is used in the game. It is important that it follows Javascript syntax (otherwise it will produce errors) and is a single line of code that produces some sort of result, depending on what it is being used for. This is how a portion of the tricks that goes on in arcanum can be done. Specific parameters are passed into the function upon being called, depending on what the function is being used for.

### Game
Game (g) is the entire list of gdata items recorded in the game. Does not include any of the game functions.

### Target
Target (t) is the target that will be affected by the result of the function. Passed in parameter is an NPC or player. Used for attacks and effects.

### Actor
Actor (a) is the source of the function call. Passed-in parameter is an NPC or player. Used for everything except boolean tests.

### Item
Item (i) is exclusively used for boolean tests, and is the item being tested for unlocking. Can be anything with a [require](##-Require) or [need](##-Need) property.

### Context
Context (c) refers to the target's context, and is used only in attacks.

### State
State (s) is the gdata manager (normally the GameState), with all of the functions and properties included. Used specifically for test functions.