# Firebot FreeStyler Control Script

This firebot setup contains a script for controlling FreeStyler lighting software. 

## Features

- Toggle between preset effects by selecting them from a dropdown list.
- Send commands to FreeStyler to control lighting effects.

## Installation

1. Import the Firebot setup
2. In Firebot, navigate to the "Scripts" tab.
3. Click on "Import Script" and select the downloaded script file (`FireStyler.js`).
4. The script should now appear in your list of available scripts.

## Usage

- You will need to set up the sequences in the cue list in FreeStyler (currently limited to 20)
- The custom script takes about 1.5 seconds to complete, but Freestyler reacts as soon as the sequence is triggered. Therefore an effect queue should be used (included in the setup) to make sure the commands are not sent while another is running.
- Use a Custom Script effect and choose the custom script, and then the sequence you wish to toggle within the script settings.
- You could also set up Preset Effect Lists (I've added three examples) Containing one or more custom script effects.


## Author

[MattyCanny](https://github.com/MattyCanny)

## Version

1.0

## License

This project is licensed under the [GNU General Public License v3.0](LICENSE).
