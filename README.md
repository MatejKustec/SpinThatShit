# SpinThatShit
A set of SCSS mixins for single element loaders and spinners 

[View examples](https://matejkustec.github.io/SpinThatShit/)

## Getting started


```
npm install spinthatshit
```
```
bower install SpinThatShit
```

OR

* Clone or download repo
* Include `src` folder to your project



## Usage

Create a div with your custom loader class name:

```html
<div class="your-loader"></div>
```

In your custom class name include a mixin of a loader. All loaders are ordered by number, so you will have to take a look in examples folder for your loader number.

```scss
.your-loader {
    @include loader01;
}
```

In `_variables.scss` there are default settings for loaders

```scss
$loader-color: #0052ec;
$loader-size: 56px;
$loader-height: 20px;
$loader-border-size: 8px;
$loader-gap: 12px;
$loader-animation-duration: 1s;
```

But you can also change these default settings, while your're including loader

```scss
@include loader09($size: 10px, $height: 48px, $gap: 8px, $duration: 1s, $align: middle);
```

All loaders can be also aligned to center, while including loader with parameter `$align`,
`$align: center` is just for x axis, `$align: middle` is for both axis.

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

If you have some new idea for loader/spinner or you want to fix loader just let me know.
