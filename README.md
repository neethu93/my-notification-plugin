# jQuery 'My Notification' plugin

A simple jQuery plugin that shows notification message, which can extend easily to show cookie messages



## Description

This simple plugin helps you hows notification message, which can extend easily to impliment functionalitties like cookie messages .

## Demo
 - Please see index.html

## Requires
  - jQuery 2+

## Installation
  - Include jquery dependency
  - include jquery.my-notification-plugin.js
  - include jquery.my-notification-plugin.css

## Options

#### state
  - description: currently supports 3 states : error / warn / success which can be passed to show different color backgrounds
  - data type: string
  - default value: 'error'
  - possible value: 'error', 'warn', or 'success'

#### message
  - description: The message you wish to show as notification
  - data type: string
  - default value: 'something went wrong'
  - possible value: any string

#### position
  - description: position of the top of the notification container
  - data type: number
  - default value: 0
  - possible value: 0 to 100. 0 is at the top, 100 at the botton. any value in between as per the percentance of height of viewport

#### width
  - description: width of the notification container w.r.t to view port
  - data type: number
  - default value: 100
  - possible value: from 1 to 100

#### overlay
  - description: To show an overlay over the html body when notification is shown
  - data type: boolean
  - default value: true
  - possible value: true | false

## Usage
> Example code:

    <!--Creates the popup content. Needs to be included close to body-->
    <div class="my-notification-popup"></div>
    <script>
    $.notification({
        state         : 'success',
        message       : 'Number you entered in inside valid range !',
        position        : 0,
        overlay       : true
    });
    </script>


## License

Free to use or to edit and use. Feel free to use/abuse
