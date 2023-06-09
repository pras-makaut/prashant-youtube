Debouncing
difference between two key stroke when typing
1.low=200ms
2.fast=30ms

Performance:
slow
-iphone pro max = 14letters*1000=14000
fast
-with debouncing = 3API calls *1000 =3000

Debouncing with 200ms
-if difference between two key stroke is less than 200ms then i should noT call the API
-for greater than 200 ms make an API call
