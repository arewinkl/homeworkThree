# Homework Number Three

## Random Password Generation

The assignment for this week was to take an existing bit of code and then add javascript to create the password.
There was some __javaScript__ already in the file and the pages were linked, but currently outside of the html and css nothing was working for generating a password.

-the first step was to take some time and outline all of the __variables__ that would need to be included for the coding to work effectively. This was done at the top of the page, since this made it extremely easy to reference when writing the code for the page.

-The second step of writing the code was to understand what exactly was the goal of the program. We knew that it was supposed to generate a random password for the user, but there were several criteria that needed to be met first.
    *Needed to find out if the user wanted to include lower case letters in their new password.

    *Needed to find out if the user wanted to include upper case letters in their new password.

    *Needed to find out if the user wanted to include any numbers in their new password.

    *Needed to find out if the user wanted to include any special characters such as !,@,#,$ in their new password.

    *Finally we needed to know how long they wanted their password to be, and this step is very important because depending on what the password was going to be used for you may a longer (more secure) password.


-Once we knew all of the pieces that had to be included in the design it was time to decide how to display the password. initially I thought that it would be awesome if there was a way for them to click the password and it would be automatically saved for them, but that seemed too complex to figure out at the present time. I settled on the newly generated password being displayed as an alert on the screen after they have gone through all of the prompts.


-Being new to __JavaScript__ I found this assignment very challenging, but I actually really enjoyed working on it, the fact that it was something new that I didn't understand *(essentially everything coding related)* wasn't a deterrent at all. I understand that this corse is just going to get harder so I have to be willing to embrace the challenge in front of me.


### Problems I encountered

-Like I stated above I really enjoyed the challenge of this project, but thats not to say that there weren't parts that I struggled with. The main thing that I struggled to complete was figuring out how best to write the code so that it would perform many functions at once. My homework has a lot of variables attached to it, and I think that I probably could have paired some of them down to limit the amount of code that I had to write.
-The other problem I encountered was with the *random generation* aspect of the project, and getting that all done in one function. I was sure how to do that , and when I tried combining functions it never seamed to work. So in the end I was left with several functions that were all trying to produce random sections of the code: __uppercase, lowercase, numbers, length of password, special characters__. Then I needed to combine each randomly generated element together to form one coherent password. I know that there is a way to do it in one function or one object, but, that part of __JavaScript__ has been the most challenging, and I will be continuing to work on mastering how to best use them.