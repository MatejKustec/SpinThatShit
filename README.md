# SpinThatShit
A set of SCSS mixins for single element loaders and spinners.

[View examples](https://matejkustec.github.io/SpinThatShit/)

## Getting started

```
npm install spinthatshit
```
```
bower install SpinThatShit
```

OR via Docker

```
docker-compose up
```

OR

* Clone or download repo
* Include `src` folder to your project



## Usage

Create a div with your custom loader class name:

```html
<div class="your-loader"></div>
```

In your custom class name include a mixin of a loader. All loaders are ordered by number, you will have to take a look in examples folder the loader number you're after:

```scss
.your-loader {
    @include loader01;
}
```

Default settings for loaders are located in `_variables.scss`:

```scss
$loader-color: #0052ec;
$loader-size: 56px;
$loader-height: 20px;
$loader-border-size: 8px;
$loader-gap: 12px;
$loader-animation-duration: 1s;
```

However, you can also change the defaults while including a loader:

```scss
@include loader09($size: 10px, $height: 48px, $gap: 8px, $duration: 1s, $align: middle);
```

In addition, all loaders can be aligned to center by including a loader with `$align` parameter, 
`$align: center` is for X axis, while `$align: middle` affects both axis.

**PARAMETERS**

Parameter | Type | Default value
------------ | ------------- | -------------
$size | Number | $loader-size
$height | Number | $loader-height
$border-size | Number | $loader-border-size
$color | Color | $loader-color
$duration | Time | $loader-animation-duration
$gap | Number | $loader-gap
$align | Keyword | null

**NOTE**: Some loaders may not need `$height` and `$gap` parameters.

## Performance issues

Some loaders which are using `box-shadow` for animation may be causing high cpu usage and lag, I'll need to look into more details and fix it, if it's possible.


## Contributing

If you have new ideas for loaders/spinners or you would like to fix a loader, just let me know.


## About

Made by Matej Kustec - https://matejkustec.com/
