This project is aimed at making scripting with CustomNPC+ easier. CustomNPC+ as well as ExtendedScripts make avaialable thier API's which, for the most part, are just a collection of java interfaces that normally you would use for modding purposes. 
Instead, this project converts them into TypeScript files. Since scripting is done in javascript, the TypeScript can be used to tell your IDE (such as VSCode) what is happening and what type your variables are. 
Even better, when it knows what type your variables are it can list all the available functions for that type.

Setup:



How to Use:

All scripts exist inside of events, or at least they can. Custom npcs are the exception. Although, you can always use the event tab instead of the normal tabs.
Since everything is run in events, the first step is to create an event. For this example we will make a npc interact event.
The first step is to build your function shell as you normally would.

```js
function interact(event) {

}
```
Then, right above your function definition, type this:
```ts
/** @param { } event */
```
Then, between the brackets type the name of the event you want. If your enviornment is setup right, it should show you some options.

<img width="373" height="91" alt="image" src="https://github.com/user-attachments/assets/15375b12-f9da-4b01-add8-e75f76b1b5fc" />

You should use TAB to select the option you want and it will convert it to the correct format. Now it should look like this:

```ts
/** @param { import("src/noppes/npcs/api/event/INpcEvent").InteractEvent } event */
function interact(event) {

}
```

From here you can code inside the function without issue. There are, however, some things to keep in mind.
Trying to directly access many of the widely used fields will give you an error saying that your property does not exist on your event.
These errors, of course, will not appear when running ingame.
This also means that your IDE will not know what type your variable is and will not be able to give proper suggestions.
All fields have getter methods so you can simply use them instead to make the error go away. 
Alternatively, you specify what type your variable should be with typescript.
The comments with @'s are called annotations and because they are surrounded in /** */ they are technically commented out and safe to run ingame;
```
/** @param { import("src/noppes/npcs/api/event/INpcEvent").InteractEvent } event */
function interact(event) {
   // Will generate an error
   var player = event.player

   // Still generates the property does not exist error, but will give proper suggestions.
   /** @type { import("src/noppes/npcs/api/entity/IPlayer") } */
   var player = event.player

   // No errors
   var player = event.getPlayer() 
}
```

Now, if you aren't interested in why trying to directly access certain fields will show up as an error in your IDE, you can skip these next two paragraphs.
This issue happens because these fields are not part of the interfaces. Instead they come the class that implements these interfaces.
For example NpcEvent.InteractEvent inherits from INpcEvent.InteractEvent. NpcEvent has one field:
```java
public final IPlayer player
```
Because it is public, it is accessable even though there is no indication as such on the javadocs.









