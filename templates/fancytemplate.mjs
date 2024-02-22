export default `<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <script>
        // This code will be added to a <Script> tag, 
        // at the <head> of the document 
    </script>
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1">
    <style>
        body,
        html {
            height: 100%
        }

        * {
            box-sizing: border-box
        }

        select {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none
        }

        .form-select-option:hover {
            background: #007fff;
            color: #fff;
            cursor: pointer
        }

        .form-select-option {
            padding: 3px
        }

        .form-input-wrapper input[type=checkbox] {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none
        }

        .lp-flex-container {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex
        }

        .lp-flex-1 {
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1
        }

        .lp-ie-flex-shrink {
            -ms-flex-negative: 0
        }

        .lp-flex-direction-vertical {
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column
        }

        .lp-flex-direction-horizontal {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row
        }

        .lp-flex-direction-horizontal-reverse {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: reverse;
            -ms-flex-direction: row-reverse;
            flex-direction: row-reverse
        }

        .lp-flex-justify-center {
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center
        }

        .lp-flex-justify-flex-start {
            -webkit-box-pack: start;
            -ms-flex-pack: start;
            justify-content: flex-start
        }

        .lp-flex-justify-flex-end {
            -webkit-box-pack: end;
            -ms-flex-pack: end;
            justify-content: flex-end
        }

        .lp-flex-justify-space-evenly {
            -webkit-box-pack: space-evenly;
            -ms-flex-pack: space-evenly;
            justify-content: space-evenly
        }

        .lp-flex-align-center {
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center
        }

        .lp-flex-align-flex-start {
            -webkit-box-align: start;
            -ms-flex-align: start;
            align-items: flex-start
        }

        .lp-flex-align-flex-end {
            -webkit-box-align: end;
            -ms-flex-align: end;
            align-items: flex-end
        }

        .checkbox-wrapper {
            width: intrinsic;
            width: -moz-fit-content;
            width: -webkit-fit-content;
            width: fit-content;
            position: relative
        }

        p {
            margin: 0
        }

        strong {
            font-weight: 700
        }

        .font-awesome-icon {
            font-family: FontAwesome !important
        }

        .form-input-element {
            line-height: normal !important
        }

        .iti.iti--allow-dropdown {
            width: 100%;
            min-width: 0
        }

        input[type=date] {
            display: block;
            -webkit-appearance: textfield;
            -moz-appearance: textfield;
            min-height: 1.2em
        }

        .form-input-subscribe-mailchimp input::placeholder {
            color: null !important;
            font-size: nullpx !important;
            font-style: null !important;
            font-weight: null !important;
            text-decoration: null !important;
            font-family: null !important;
        }

        .form-input-subscribe-mailchimp input::placeholder {
            color: null !important;
            font-size: nullpx !important;
            font-style: null !important;
            font-weight: null !important;
            text-decoration: null !important;
            font-family: null !important;
        }

        .form-input-6c16ddbdead05c7082f1882ecbc3d4c1 input::placeholder {
            color: rgba(0, 0, 0, 0.5) !important;
            font-size: 14px !important;
            font-style: normal !important;
            font-weight: normal !important;
            text-decoration: none !important;
            font-family: Arial, Helvetica, sans-serif !important;
        }

        @media only screen and (max-width: 700px) {
            .responsive-row .inner-row-div .border-wrapper .row-slot-wrapper {
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -ms-flex-direction: column;
                flex-direction: column;
            }

            .responsive-row .inner-row-div .border-wrapper .row-slot-wrapper .responsive-slot {
                max-width: initial !important;
            }

            body {
                background-image: url("") !important;
                background-color: rgba(255, 255, 255, 1) !important;
                background-repeat: no-repeat !important;
                background-size: ;
                -webkit-box-align: start !important;
                -ms-flex-align: start !important;
                align-items: flex-start !important;
            }

            .rowd03e546197fa5bffb73e89e55d561c71 {
                -webkit-box-ordinal-group: 1;
                -ms-flex-order: 0;
                order: 0;
                display: block;
                background-color: rgba(236, 209, 61, 1) !important;
                background-image: url("") !important;
                background-position: initial !important;
                background-repeat: no-repeat !important;
                background-size: auto !important
            }

            .rowd03e546197fa5bffb73e89e55d561c71 .inner-row-div {
                width: auto !important;
                max-width: 1000px !important;
                border: none !important
            }

            .rowd03e546197fa5bffb73e89e55d561c71 .inner-row-div .border-wrapper {
                background-color: transparent !important;
                background-image: url("") !important;
                background-repeat: no-repeat !important;
                background-position: initial !important;
                background-size: auto !important;
                border-style: solid !important;
                border-width: 0 !important;
                border-color: #000000 !important;
                border-radius: 0px !important;
                padding: 0px !important;
            }

            .rowd03e546197fa5bffb73e89e55d561c71 .inner-row-div .border-wrapper {
                background-color: transparent !important;
                background-image: url("") !important;
                background-repeat: no-repeat !important;
                background-position: initial !important;
                background-size: auto !important;
                border-style: solid !important;
                border-width: 0 !important;
                border-color: #000000 !important;
                border-radius: 0px !important;
                padding: 0px !important;
            }

            .rowd03e546197fa5bffb73e89e55d561c71 .inner-row-div .slot9f2f91846b775480a14524eaa2852080 {
                display: -webkit-box !important;
                display: -ms-flexbox !important;
                display: flex !important;
                -webkit-box-orient: vertical !important;
                -webkit-box-direction: normal !important;
                -ms-flex-direction: column !important;
                flex-direction: column !important;
                -webkit-box-ordinal-group: 1;
                -ms-flex-order: 0;
                order: 0;
                padding: 0px !important;
                background-color: transparent !important;
                min-height: undefinedpx !important;
                max-width: 100% !important;
                -webkit-box-pack: start !important;
                -ms-flex-pack: start !important;
                justify-content: flex-start !important;
            }

            .rowd03e546197fa5bffb73e89e55d561c71 .inner-row-div .slot9f2f91846b775480a14524eaa2852080 .slot-container {
                background-color: transparent !important;
                border-radius: 0px !important;
            }

            .rowd03e546197fa5bffb73e89e55d561c71 .inner-row-div .slot9f2f91846b775480a14524eaa2852080 .imageb6700cd949eb58d485ba9b727f9c31f2 {
                background-color: transparent !important;
                -webkit-box-pack: center !important;
                -ms-flex-pack: center !important;
                justify-content: center !important;
                padding: 0px !important;
            }

            .rowd03e546197fa5bffb73e89e55d561c71 .inner-row-div .slot9f2f91846b775480a14524eaa2852080 .imageb6700cd949eb58d485ba9b727f9c31f2 img {
                border-radius: 0px !important;
                border-width: 0px !important;
                border-color: #000000 !important;
                border-style: unset !important;
                box-shadow: none !important;
                padding: 0px !important;
            }

            .rowd03e546197fa5bffb73e89e55d561c71 .inner-row-div .slot9f2f91846b775480a14524eaa2852080 .imageb6700cd949eb58d485ba9b727f9c31f2 div {
                max-width: 200px !important;
            }

            .rowd6bc9341f70c51288f94b8affb9ce99f {
                -webkit-box-ordinal-group: 2;
                -ms-flex-order: 1;
                order: 1;
                display: block;
                background-color: transparent !important;
                background-image: url("https://cdn.designer-images.net/20191015-2019-1015-2019-101520191015/f16ddb7f76364b3d8cb600ee0c12bfe0template-35-back-2.png") !important;
                background-position: top !important;
                background-repeat: no-repeat !important;
                background-size: 100% !important
            }

            .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div {
                width: auto !important;
                max-width: 1000px !important;
                border: none !important
            }

            .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .border-wrapper {
                background-color: transparent !important;
                background-image: url("https://cdn.designer-images.net/20191015-2019-1015-2019-101520191015/f67c9cb2cba046f7bd7a350199edd1bbtemplate-35-back.png") !important;
                background-repeat: no-repeat !important;
                background-position: center !important;
                background-size: 100% !important;
                border-style: solid !important;
                border-width: 0 !important;
                border-color: #000000 !important;
                border-radius: 0px !important;
                padding: 0px !important;
            }

            .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .border-wrapper {
                background-color: transparent !important;
                background-image: url("https://cdn.designer-images.net/20191015-2019-1015-2019-101520191015/f67c9cb2cba046f7bd7a350199edd1bbtemplate-35-back.png") !important;
                background-repeat: no-repeat !important;
                background-position: center !important;
                background-size: 100% !important;
                border-style: solid !important;
                border-width: 0 !important;
                border-color: #000000 !important;
                border-radius: 0px !important;
                padding: 0px !important;
            }

            .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot63208bd8f92a51e788b0e5c7f5318836 {
                display: -webkit-box !important;
                display: -ms-flexbox !important;
                display: flex !important;
                -webkit-box-orient: vertical !important;
                -webkit-box-direction: normal !important;
                -ms-flex-direction: column !important;
                flex-direction: column !important;
                -webkit-box-ordinal-group: 1;
                -ms-flex-order: 0;
                order: 0;
                padding: 0px !important;
                background-color: transparent !important;
                min-height: undefinedpx !important;
                max-width: 50% !important;
                -webkit-box-pack: start !important;
                -ms-flex-pack: start !important;
                justify-content: flex-start !important;
            }

            .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot63208bd8f92a51e788b0e5c7f5318836 .slot-container {
                background-color: rgba(236, 209, 61, 1) !important;
                border-radius: 0px !important;
            }

            .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot63208bd8f92a51e788b0e5c7f5318836 .spacer9820f19266d659318998ec2b554c5734 {
                background-color: transparent !important;
                border-width: 0px !important;
                border-radius: 0px !important;
                border-color: #000000 !important;
                height: 60px !important;
                box-shadow: none !important;
            }

            .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot63208bd8f92a51e788b0e5c7f5318836 .image1a788e61b3a2567d930fd61292306c63 {
                background-color: transparent !important;
                -webkit-box-pack: center !important;
                -ms-flex-pack: center !important;
                justify-content: center !important;
                padding: 0px !important;
            }

            .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot63208bd8f92a51e788b0e5c7f5318836 .image1a788e61b3a2567d930fd61292306c63 img {
                border-radius: 0px !important;
                border-width: 0px !important;
                border-color: #000000 !important;
                border-style: unset !important;
                box-shadow: none !important;
                padding: 0px !important;
            }

            .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot63208bd8f92a51e788b0e5c7f5318836 .image1a788e61b3a2567d930fd61292306c63 div {
                max-width: 365px !important;
            }

            .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 {
                display: -webkit-box !important;
                display: -ms-flexbox !important;
                display: flex !important;
                -webkit-box-orient: vertical !important;
                -webkit-box-direction: normal !important;
                -ms-flex-direction: column !important;
                flex-direction: column !important;
                -webkit-box-ordinal-group: 2;
                -ms-flex-order: 1;
                order: 1;
                padding: 0px !important;
                background-color: transparent !important;
                min-height: undefinedpx !important;
                max-width: 50% !important;
                -webkit-box-pack: center !important;
                -ms-flex-pack: center !important;
                justify-content: center !important;
            }

            .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .slot-container {
                background-color: transparent !important;
                border-radius: 0px !important;
            }

            .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .spacer821e5f710aa352c08bf901f55cc49ff3 {
                background-color: transparent !important;
                border-width: 0px !important;
                border-radius: 0px !important;
                border-color: #000000 !important;
                height: 40px !important;
                box-shadow: none !important;
            }

            .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .text-desktop.text334ae91f9b7c50d7a1105e899d16f3cb {
                display: none !important;
            }

            .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .text-mobile.text334ae91f9b7c50d7a1105e899d16f3cb {
                display: block !important;
            }

            .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .text-desktop.text5c6ab35fbf5b5810bd26fff3c49afbc5 {
                display: none !important;
            }

            .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .text-mobile.text5c6ab35fbf5b5810bd26fff3c49afbc5 {
                display: block !important;
            }

            .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .text-desktop.textc9cebf73220d59bb81ea075256a37b64 {
                display: none !important;
            }

            .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .text-mobile.textc9cebf73220d59bb81ea075256a37b64 {
                display: block !important;
            }

            .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .form6c16ddbdead05c7082f1882ecbc3d4c1 {
                background-color: transparent !important;
                border-style: solid !important;
                border-color: #000000 !important;
                border-width: 0px !important;
                border-radius: 0px !important;
                box-shadow: none !important;
                padding-top: 10px !important;
                padding-right: 20px !important;
                padding-bottom: 10px !important;
                padding-left: 20px !important;
            }

            .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .form6c16ddbdead05c7082f1882ecbc3d4c1 form {
                width: 100% !important;
                margin: undefined !important;
                display: block !important;
                display: block !important;
                display: block !important;
            }

            .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .form6c16ddbdead05c7082f1882ecbc3d4c1 form label.form-input-wrapper-element {
                -webkit-box-orient: vertical !important;
                -webkit-box-direction: normal !important;
                -ms-flex-direction: column !important;
                flex-direction: column !important; //width: 100% !important; -webkit-box-align: initial !important; -ms-flex-align: initial !important; align-items: initial !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .form6c16ddbdead05c7082f1882ecbc3d4c1 form div.form-input-wrapper { margin: 8px auto !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .form6c16ddbdead05c7082f1882ecbc3d4c1 form label.form-input-wrapper-element .form-select-option-container { left: 0px !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .form6c16ddbdead05c7082f1882ecbc3d4c1 form .form-input-wrapper-element span.form-field-label { color: #404040 !important; font-size: 16px !important; flex-basis: 20px !important; font-weight: normal !important; font-style: normal !important; text-decoration: none !important; display: none !important; font-family: Arial, Helvetica, sans-serif !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .form6c16ddbdead05c7082f1882ecbc3d4c1 form .form-input-wrapper-element span.form-field-label .form-field-required { color: rgba(240, 52, 52, 1) !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .form6c16ddbdead05c7082f1882ecbc3d4c1 form .form-input-wrapper-element div input { color: rgba(0, 0, 0, 1) !important; font-size: 14px !important; background: #FFFFFF !important; padding: 11px !important; border-width: 2px !important; border-color: #c9c9c9 !important; border-radius: 3px !important; border-style: solid !important; font-weight: normal !important; font-style: normal !important; text-decoration: none !important; font-family: Arial, Helvetica, sans-serif !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .form6c16ddbdead05c7082f1882ecbc3d4c1 form .form-input-wrapper-element div input::placeholder { color: rgba(0, 0, 0, 0.5) !important; font-size: 14px !important; font-weight: normal !important; font-style: normal !important; text-decoration: none !important; font-family: Arial, Helvetica, sans-serif !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .form6c16ddbdead05c7082f1882ecbc3d4c1 form .form-button-element { -webkit-box-pack: center !important; -ms-flex-pack: center !important; justify-content: center !important; padding-top: 0px !important; padding-left: 0px !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .form6c16ddbdead05c7082f1882ecbc3d4c1 form .form-button-element button { background-color: rgba(236,209,61,1) !important; border-color: #000000 !important; border-radius: 4px !important; border-width: 0px !important; color: rgba(46,43,43,1) !important; font-family: Arial, Helvetica, sans-serif !important; font-size: 18px !important; font-style: normal !important; font-weight: normal !important; margin: 0px !important; padding: 13px !important; text-decoration: none !important; width: 100% !important; padding: 13px !important; height: initial !important; max-width: unset !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .form6c16ddbdead05c7082f1882ecbc3d4c1 #recaptcha6c16ddbdead05c7082f1882ecbc3d4c1 { margin-bottom: 15px !important; margin-top: 15px !important; -webkit-box-pack: center !important; -ms-flex-pack: center !important; justify-content: center !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .form6c16ddbdead05c7082f1882ecbc3d4c1 form label.form-checkbox-element { -webkit-box-orient: horizontal !important; -webkit-box-direction: reverse !important; -ms-flex-direction: row-reverse !important; flex-direction: row-reverse !important; -webkit-box-align: center !important; -ms-flex-align: center !important; align-items: center !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .form6c16ddbdead05c7082f1882ecbc3d4c1 form label.form-checkbox-element span.form-field-label { flex-basis: unset !important; display: flex !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .wheel-of-fortune-component.wheel-of-fortunewheel6c16ddbdead05c7082f1882ecbc3d4c1 { padding: 10px !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .wheel-of-fortune-component.wheel-of-fortunewheel6c16ddbdead05c7082f1882ecbc3d4c1 .wheel-of-fortune-arrow { background-color: #d84840 !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .spaceraa7a32ca787150bda1499f6241fe3f94 { background-color: transparent !important; border-width: 0px !important; border-radius: 0px !important; border-color: #000000 !important; height: 40px !important; box-shadow: none !important; } .row9dd35084ce8d5ff186727754066b9ed9 { -webkit-box-ordinal-group: 3; -ms-flex-order: 2; order: 2; display: none; background-color: rgba(255,255,255,1) !important; background-image: url("") !important; background-position: initial !important; background-repeat: no-repeat !important; background-size: auto !important } .row9dd35084ce8d5ff186727754066b9ed9 .inner-row-div { width: auto !important; max-width: 1000px !important; border: none !important } .row9dd35084ce8d5ff186727754066b9ed9 .inner-row-div .border-wrapper { background-color: transparent !important; background-image: url("") !important; background-repeat: no-repeat !important; background-position: initial !important; background-size: auto !important; border-style: solid !important; border-width: 0 !important; border-color: #000000 !important; border-radius: 0px !important; padding: 0px !important; } .row9dd35084ce8d5ff186727754066b9ed9 .inner-row-div .border-wrapper { background-color: transparent !important; background-image: url("") !important; background-repeat: no-repeat !important; background-position: initial !important; background-size: auto !important; border-style: solid !important; border-width: 0 !important; border-color: #000000 !important; border-radius: 0px !important; padding: 0px !important; } .row9dd35084ce8d5ff186727754066b9ed9 .inner-row-div .slot68e21653e521503dbf10e830ba0c33e6 { display: -webkit-box !important; display: -ms-flexbox !important; display: flex !important; -webkit-box-orient: vertical !important; -webkit-box-direction: normal !important; -ms-flex-direction: column !important; flex-direction: column !important; -webkit-box-ordinal-group: 1; -ms-flex-order: 0; order: 0; padding: 0px !important; background-color: transparent !important; min-height: undefinedpx !important; max-width: 100% !important; -webkit-box-pack: start !important; -ms-flex-pack: start !important; justify-content: flex-start !important; } .row9dd35084ce8d5ff186727754066b9ed9 .inner-row-div .slot68e21653e521503dbf10e830ba0c33e6 .slot-container { background-color: transparent !important; border-radius: 0px !important; } .row9dd35084ce8d5ff186727754066b9ed9 .inner-row-div .slot68e21653e521503dbf10e830ba0c33e6 .spacerf247f961cd1e5e8582ff84e2d969b0e8 { background-color: transparent !important; border-width: 0px !important; border-radius: 0px !important; border-color: #000000 !important; height: 40px !important; box-shadow: none !important; } } @media only screen and (max-width: 450px) { .responsive-row .inner-row-div .border-wrapper .row-slot-wrapper{ -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column; } .responsive-row .inner-row-div .border-wrapper .row-slot-wrapper .responsive-slot { max-width: initial !important; } body { background-image: url("") !important; background-color: rgba(255,255,255,1) !important; background-repeat: no-repeat !important; background-size: ; -webkit-box-align: start !important; -ms-flex-align: start !important; align-items: flex-start !important; } .rowd03e546197fa5bffb73e89e55d561c71 { -webkit-box-ordinal-group: 1; -ms-flex-order: 0; order: 0; display: block; background-color: rgba(236,209,61,1) !important; background-image: url("") !important; background-position: initial !important; background-repeat: no-repeat !important; background-size: auto !important } .rowd03e546197fa5bffb73e89e55d561c71 .inner-row-div { width: auto !important; max-width: 1000px !important; border: none !important } .rowd03e546197fa5bffb73e89e55d561c71 .inner-row-div .border-wrapper { background-color: transparent !important; background-image: url("") !important; background-repeat: no-repeat !important; background-position: initial !important; background-size: auto !important; border-style: solid !important; border-width: 0 !important; border-color: #000000 !important; border-radius: 0px !important; padding: 0px !important; } .rowd03e546197fa5bffb73e89e55d561c71 .inner-row-div .border-wrapper { background-color: transparent !important; background-image: url("") !important; background-repeat: no-repeat !important; background-position: initial !important; background-size: auto !important; border-style: solid !important; border-width: 0 !important; border-color: #000000 !important; border-radius: 0px !important; padding: 0px !important; } .rowd03e546197fa5bffb73e89e55d561c71 .inner-row-div .slot9f2f91846b775480a14524eaa2852080 { display: -webkit-box !important; display: -ms-flexbox !important; display: flex !important; -webkit-box-orient: vertical !important; -webkit-box-direction: normal !important; -ms-flex-direction: column !important; flex-direction: column !important; -webkit-box-ordinal-group: 1; -ms-flex-order: 0; order: 0; padding: 0px !important; background-color: transparent !important; min-height: undefinedpx !important; max-width: 100% !important; -webkit-box-pack: start !important; -ms-flex-pack: start !important; justify-content: flex-start !important; } .rowd03e546197fa5bffb73e89e55d561c71 .inner-row-div .slot9f2f91846b775480a14524eaa2852080 .slot-container { background-color: transparent !important; border-radius: 0px !important; } .rowd03e546197fa5bffb73e89e55d561c71 .inner-row-div .slot9f2f91846b775480a14524eaa2852080 .imageb6700cd949eb58d485ba9b727f9c31f2 { background-color: transparent !important; -webkit-box-pack: center !important; -ms-flex-pack: center !important; justify-content: center !important; padding: 0px !important; } .rowd03e546197fa5bffb73e89e55d561c71 .inner-row-div .slot9f2f91846b775480a14524eaa2852080 .imageb6700cd949eb58d485ba9b727f9c31f2 img { border-radius: 0px !important; border-width: 0px !important; border-color: #000000 !important; border-style: unset !important; box-shadow: none !important; padding: 0px !important; } .rowd03e546197fa5bffb73e89e55d561c71 .inner-row-div .slot9f2f91846b775480a14524eaa2852080 .imageb6700cd949eb58d485ba9b727f9c31f2 div { max-width: 200px !important; } .rowd6bc9341f70c51288f94b8affb9ce99f { -webkit-box-ordinal-group: 2; -ms-flex-order: 1; order: 1; display: block; background-color: transparent !important; background-image: url("https://cdn.designer-images.net/20191015-2019-1015-2019-101520191015/f16ddb7f76364b3d8cb600ee0c12bfe0template-35-back-2.png") !important; background-position: top !important; background-repeat: no-repeat !important; background-size: 100% !important } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div { width: auto !important; max-width: 1000px !important; border: none !important } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .border-wrapper { background-color: transparent !important; background-image: url("https://cdn.designer-images.net/20191015-2019-1015-2019-101520191015/f67c9cb2cba046f7bd7a350199edd1bbtemplate-35-back.png") !important; background-repeat: no-repeat !important; background-position: center !important; background-size: 100% !important; border-style: solid !important; border-width: 0 !important; border-color: #000000 !important; border-radius: 0px !important; padding: 0px !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .border-wrapper { background-color: transparent !important; background-image: url("https://cdn.designer-images.net/20191015-2019-1015-2019-101520191015/f67c9cb2cba046f7bd7a350199edd1bbtemplate-35-back.png") !important; background-repeat: no-repeat !important; background-position: center !important; background-size: 100% !important; border-style: solid !important; border-width: 0 !important; border-color: #000000 !important; border-radius: 0px !important; padding: 0px !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot63208bd8f92a51e788b0e5c7f5318836 { display: -webkit-box !important; display: -ms-flexbox !important; display: flex !important; -webkit-box-orient: vertical !important; -webkit-box-direction: normal !important; -ms-flex-direction: column !important; flex-direction: column !important; -webkit-box-ordinal-group: 1; -ms-flex-order: 0; order: 0; padding: 0px !important; background-color: transparent !important; min-height: undefinedpx !important; max-width: 50% !important; -webkit-box-pack: start !important; -ms-flex-pack: start !important; justify-content: flex-start !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot63208bd8f92a51e788b0e5c7f5318836 .slot-container { background-color: rgba(236,209,61,1) !important; border-radius: 0px !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot63208bd8f92a51e788b0e5c7f5318836 .spacer9820f19266d659318998ec2b554c5734 { background-color: transparent !important; border-width: 0px !important; border-radius: 0px !important; border-color: #000000 !important; height: 60px !important; box-shadow: none !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot63208bd8f92a51e788b0e5c7f5318836 .image1a788e61b3a2567d930fd61292306c63 { background-color: transparent !important; -webkit-box-pack: center !important; -ms-flex-pack: center !important; justify-content: center !important; padding: 0px !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot63208bd8f92a51e788b0e5c7f5318836 .image1a788e61b3a2567d930fd61292306c63 img { border-radius: 0px !important; border-width: 0px !important; border-color: #000000 !important; border-style: unset !important; box-shadow: none !important; padding: 0px !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot63208bd8f92a51e788b0e5c7f5318836 .image1a788e61b3a2567d930fd61292306c63 div { max-width: 365px !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 { display: -webkit-box !important; display: -ms-flexbox !important; display: flex !important; -webkit-box-orient: vertical !important; -webkit-box-direction: normal !important; -ms-flex-direction: column !important; flex-direction: column !important; -webkit-box-ordinal-group: 2; -ms-flex-order: 1; order: 1; padding: 0px !important; background-color: transparent !important; min-height: undefinedpx !important; max-width: 50% !important; -webkit-box-pack: center !important; -ms-flex-pack: center !important; justify-content: center !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .slot-container { background-color: transparent !important; border-radius: 0px !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .spacer821e5f710aa352c08bf901f55cc49ff3 { background-color: transparent !important; border-width: 0px !important; border-radius: 0px !important; border-color: #000000 !important; height: 40px !important; box-shadow: none !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .text-desktop.text334ae91f9b7c50d7a1105e899d16f3cb { display: none !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .text-mobile.text334ae91f9b7c50d7a1105e899d16f3cb { display: block !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .text-desktop.text5c6ab35fbf5b5810bd26fff3c49afbc5 { display: none !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .text-mobile.text5c6ab35fbf5b5810bd26fff3c49afbc5 { display: block !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .text-desktop.textc9cebf73220d59bb81ea075256a37b64 { display: none !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .text-mobile.textc9cebf73220d59bb81ea075256a37b64 { display: block !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .form6c16ddbdead05c7082f1882ecbc3d4c1 { background-color: transparent !important; border-style: solid !important; border-color: #000000 !important; border-width: 0px !important; border-radius: 0px !important; box-shadow: none !important; padding-top: 10px !important; padding-right: 20px !important; padding-bottom: 10px !important; padding-left: 20px !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .form6c16ddbdead05c7082f1882ecbc3d4c1 form { width: 100% !important; margin: undefined !important; display: block !important; display: block !important; display: block !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .form6c16ddbdead05c7082f1882ecbc3d4c1 form label.form-input-wrapper-element { -webkit-box-orient: vertical !important; -webkit-box-direction: normal !important; -ms-flex-direction: column !important; flex-direction: column !important; //width: 100% !important; -webkit-box-align: initial !important; -ms-flex-align: initial !important; align-items: initial !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .form6c16ddbdead05c7082f1882ecbc3d4c1 form div.form-input-wrapper { margin: 8px auto !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .form6c16ddbdead05c7082f1882ecbc3d4c1 form label.form-input-wrapper-element .form-select-option-container { left: 0px !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .form6c16ddbdead05c7082f1882ecbc3d4c1 form .form-input-wrapper-element span.form-field-label { color: #404040 !important; font-size: 16px !important; flex-basis: 20px !important; font-weight: normal !important; font-style: normal !important; text-decoration: none !important; display: none !important; font-family: Arial, Helvetica, sans-serif !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .form6c16ddbdead05c7082f1882ecbc3d4c1 form .form-input-wrapper-element span.form-field-label .form-field-required { color: rgba(240, 52, 52, 1) !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .form6c16ddbdead05c7082f1882ecbc3d4c1 form .form-input-wrapper-element div input { color: rgba(0, 0, 0, 1) !important; font-size: 14px !important; background: #FFFFFF !important; padding: 11px !important; border-width: 2px !important; border-color: #c9c9c9 !important; border-radius: 3px !important; border-style: solid !important; font-weight: normal !important; font-style: normal !important; text-decoration: none !important; font-family: Arial, Helvetica, sans-serif !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .form6c16ddbdead05c7082f1882ecbc3d4c1 form .form-input-wrapper-element div input::placeholder { color: rgba(0, 0, 0, 0.5) !important; font-size: 14px !important; font-weight: normal !important; font-style: normal !important; text-decoration: none !important; font-family: Arial, Helvetica, sans-serif !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .form6c16ddbdead05c7082f1882ecbc3d4c1 form .form-button-element { -webkit-box-pack: center !important; -ms-flex-pack: center !important; justify-content: center !important; padding-top: 0px !important; padding-left: 0px !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .form6c16ddbdead05c7082f1882ecbc3d4c1 form .form-button-element button { background-color: rgba(236,209,61,1) !important; border-color: #000000 !important; border-radius: 4px !important; border-width: 0px !important; color: rgba(46,43,43,1) !important; font-family: Arial, Helvetica, sans-serif !important; font-size: 18px !important; font-style: normal !important; font-weight: normal !important; margin: 0px !important; padding: 13px !important; text-decoration: none !important; width: 100% !important; padding: 13px !important; height: initial !important; max-width: unset !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .form6c16ddbdead05c7082f1882ecbc3d4c1 #recaptcha6c16ddbdead05c7082f1882ecbc3d4c1 { margin-bottom: 15px !important; margin-top: 15px !important; -webkit-box-pack: center !important; -ms-flex-pack: center !important; justify-content: center !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .form6c16ddbdead05c7082f1882ecbc3d4c1 form label.form-checkbox-element { -webkit-box-orient: horizontal !important; -webkit-box-direction: reverse !important; -ms-flex-direction: row-reverse !important; flex-direction: row-reverse !important; -webkit-box-align: center !important; -ms-flex-align: center !important; align-items: center !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .form6c16ddbdead05c7082f1882ecbc3d4c1 form label.form-checkbox-element span.form-field-label { flex-basis: unset !important; display: flex !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .wheel-of-fortune-component.wheel-of-fortunewheel6c16ddbdead05c7082f1882ecbc3d4c1 { padding: 10px !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .wheel-of-fortune-component.wheel-of-fortunewheel6c16ddbdead05c7082f1882ecbc3d4c1 .wheel-of-fortune-arrow { background-color: #d84840 !important; } .rowd6bc9341f70c51288f94b8affb9ce99f .inner-row-div .slot9ff52fa75fe550c1b2c36e952617ded3 .spaceraa7a32ca787150bda1499f6241fe3f94 { background-color: transparent !important; border-width: 0px !important; border-radius: 0px !important; border-color: #000000 !important; height: 40px !important; box-shadow: none !important; } .row9dd35084ce8d5ff186727754066b9ed9 { -webkit-box-ordinal-group: 3; -ms-flex-order: 2; order: 2; display: none; background-color: rgba(255,255,255,1) !important; background-image: url("") !important; background-position: initial !important; background-repeat: no-repeat !important; background-size: auto !important } .row9dd35084ce8d5ff186727754066b9ed9 .inner-row-div { width: auto !important; max-width: 1000px !important; border: none !important } .row9dd35084ce8d5ff186727754066b9ed9 .inner-row-div .border-wrapper { background-color: transparent !important; background-image: url("") !important; background-repeat: no-repeat !important; background-position: initial !important; background-size: auto !important; border-style: solid !important; border-width: 0 !important; border-color: #000000 !important; border-radius: 0px !important; padding: 0px !important; } .row9dd35084ce8d5ff186727754066b9ed9 .inner-row-div .border-wrapper { background-color: transparent !important; background-image: url("") !important; background-repeat: no-repeat !important; background-position: initial !important; background-size: auto !important; border-style: solid !important; border-width: 0 !important; border-color: #000000 !important; border-radius: 0px !important; padding: 0px !important; } .row9dd35084ce8d5ff186727754066b9ed9 .inner-row-div .slot68e21653e521503dbf10e830ba0c33e6 { display: -webkit-box !important; display: -ms-flexbox !important; display: flex !important; -webkit-box-orient: vertical !important; -webkit-box-direction: normal !important; -ms-flex-direction: column !important; flex-direction: column !important; -webkit-box-ordinal-group: 1; -ms-flex-order: 0; order: 0; padding: 0px !important; background-color: transparent !important; min-height: undefinedpx !important; max-width: 100% !important; -webkit-box-pack: start !important; -ms-flex-pack: start !important; justify-content: flex-start !important; } .row9dd35084ce8d5ff186727754066b9ed9 .inner-row-div .slot68e21653e521503dbf10e830ba0c33e6 .slot-container { background-color: transparent !important; border-radius: 0px !important; } .row9dd35084ce8d5ff186727754066b9ed9 .inner-row-div .slot68e21653e521503dbf10e830ba0c33e6 .spacerf247f961cd1e5e8582ff84e2d969b0e8 { background-color: transparent !important; border-width: 0px !important; border-radius: 0px !important; border-color: #000000 !important; height: 40px !important; box-shadow: none !important; } } 
    </style>
    <style>
        @media all and (-ms-high-contrast:none),
        (-ms-high-contrast:active) {
            .checkbox-check-marker {
                display: none !important
            }

            .element-vertical-ie {
                display: block !important
            }
        }
    </style>
    <!--[if IE]>
			<style>
				.checkbox-check-marker {
					display: none !important;
				}
			</style>
		<![endif]-->
    <script src="https://polyfill.io/v3/polyfill.min.js?features=Array.prototype.includes%2Cfetch%2CObject.assign%2CString.prototype.includes"></script>
    <script src="https://cdn-editor.moosend.com/assets/tel-input/js/intlTelInput.min.js"></script>
    <script src="https://cdn-editor.moosend.com/assets/tel-input/js/utils.js"></script>
    <link rel="stylesheet" href="https://cdn-editor.moosend.com/assets/tel-input/css/intlTelInput.min.css">
</head>

<body style="padding: 0px; margin: 0px; font-family: arial, sans-serif; display: flex; background-repeat: no-repeat; background-size: auto; background-color: rgb(255, 255, 255); background-image: url(&quot;&quot;);" class="notranslate">
    <div class="content lp-flex-container lp-flex-direction-vertical" style="flex:1">
        <div data-structure-type="row" id="d03e546197fa5bffb73e89e55d561c71" data-row-type="FULL" data-row-id="d03e5461-97fa-5bff-b73e-89e55d561c71" data-row-behavior="NORMAL" data-row-repeat-count="5" data-row-sort-products="Orders" data-row-background-color-wide="rgba(46,43,43,1)" data-row-background-image-wide="rgba(46,43,43,1)" data-row-background-repeat-wide="rgba(46,43,43,1)" class="landing-page-row rowd03e546197fa5bffb73e89e55d561c71 responsive-row lp-ie-flex-shrink" style="background-color: rgb(46, 43, 43); background-image: url(&quot;&quot;); background-position: initial; background-repeat: no-repeat; background-size: auto;">
            <div class="inner-row-div" style="vertical-align: top; max-width: 1000px; width: 100%; margin: 0px auto;">
                <div class="border-wrapper" style="width: 100%; background-color: transparent; background-image: url(&quot;&quot;); background-repeat: no-repeat; background-position: initial; border-radius: 0px; padding: 0px;">
                    <div class="row-slot-wrapper lp-flex-container" style="display: flex;">
                        <div class="landing-page-slot lp-flex-container lp-flex-direction-vertical lp-flex-justify-flex-start lp-flex-1 slot9f2f91846b775480a14524eaa2852080 FULL responsive-slot" id="9f2f91846b775480a14524eaa2852080" data-structure-type="slot" data-slot-type="FULL" style="display: flex; flex-grow: 1; flex-direction: column; max-width: 1000px; background-color: transparent; justify-content: flex-start; -webkit-box-pack: start; padding: 0px;">
                            <div class="slot-container lp-flex-container lp-flex-direction-vertical lp-ie-flex-shrink" style="background-color: transparent; overflow: visible; display: flex; flex-direction: column; border-radius: 0px;">
                                <div class="component spacer-component spacer573939ba357c5e018cff0adb7ae06c84" data-component-type="spacer" cellspacing="0" cellpadding="0" id="573939ba357c5e018cff0adb7ae06c84" style="background-color: transparent; clear: both; height: 20px; border-width: 0px; border-radius: 0px; border-color: rgb(0, 0, 0); border-style: unset; box-shadow: none;"></div>
                                <div class="component image-component imageb6700cd949eb58d485ba9b727f9c31f2 lp-flex-container lp-flex-align-center lp-flex-justify-center lp-ie-flex-shrink" data-component-type="image" data-parent-slot-type="FULL" style="clear: both; background-color: transparent; align-items: center; justify-content: center; -webkit-box-pack: center; display: flex; padding: 0px;">
                                    <div style="border: 0px; width: 100%; max-width: 230px;"><img src="https://moosendimages.imgix.net/20191023-2019-1023-2019-102320191023/5b18411dd4284fc19308dc6b2fe1a10b85778192d4bc4013a0fdb3aaf856e732logo-2.png?auto=format%2Ccompress&amp;dpr=1&amp;fit=clip&amp;ixjsv=2.2.4&amp;w=460" alt="Email Image" id="b6700cd949eb58d485ba9b727f9c31f2" class="newsletter-image " height="auto" style="box-sizing: border-box; display: block; border-width: 0px; border-color: rgb(0, 0, 0); border-radius: 0px; border-style: unset; width: 100%; height: auto; box-shadow: none;"></div>
                                </div>
                                <div class="component spacer-component spacer03cfe75a9baa52d795220e14ac9d7908" data-component-type="spacer" cellspacing="0" cellpadding="0" id="03cfe75a9baa52d795220e14ac9d7908" style="background-color: transparent; clear: both; height: 20px; border-width: 0px; border-radius: 0px; border-color: rgb(0, 0, 0); border-style: unset; box-shadow: none;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div data-structure-type="row" id="d6bc9341f70c51288f94b8affb9ce99f" data-row-type="HALF" data-row-id="d6bc9341-f70c-5128-8f94-b8affb9ce99f" data-row-behavior="NORMAL" data-row-repeat-count="5" data-row-sort-products="Orders" data-row-background-color-wide="rgba(236,209,61,1)" data-row-background-image-wide="rgba(236,209,61,1)" data-row-background-repeat-wide="rgba(236,209,61,1)" class="landing-page-row rowd6bc9341f70c51288f94b8affb9ce99f responsive-row lp-ie-flex-shrink" style="background-color: rgb(236, 209, 61); background-image: url(&quot;https://cdn.designer-images.net/20191015-2019-1015-2019-101520191015/f16ddb7f76364b3d8cb600ee0c12bfe0template-35-back-2.png&quot;); background-position: center top; background-repeat: no-repeat; background-size: 100%;">
            <div class="inner-row-div" style="vertical-align: top; max-width: 1000px; width: 100%; margin: 0px auto;">
                <div class="border-wrapper" style="width: 100%; background-color: transparent; background-image: url(&quot;https://cdn.designer-images.net/20191015-2019-1015-2019-101520191015/f67c9cb2cba046f7bd7a350199edd1bbtemplate-35-back.png&quot;); background-repeat: no-repeat; background-position: center center; background-size: 100%; border-radius: 0px; padding: 0px;">
                    <div class="row-slot-wrapper lp-flex-container" style="display: flex;">
                        <div class="landing-page-slot lp-flex-container lp-flex-direction-vertical lp-flex-justify-flex-start lp-flex-1 slot63208bd8f92a51e788b0e5c7f5318836 HALF responsive-slot" id="63208bd8f92a51e788b0e5c7f5318836" data-structure-type="slot" data-slot-type="HALF" style="display: flex; flex-grow: 1; flex-direction: column; max-width: 500px; background-color: transparent; justify-content: flex-start; -webkit-box-pack: start; padding: 0px;">
                            <div class="slot-container lp-flex-container lp-flex-direction-vertical lp-ie-flex-shrink" style="background-color: transparent; overflow: visible; display: flex; flex-direction: column; border-radius: 0px;">
                                <div class="component spacer-component spacer9820f19266d659318998ec2b554c5734" data-component-type="spacer" cellspacing="0" cellpadding="0" id="9820f19266d659318998ec2b554c5734" style="background-color: transparent; clear: both; height: 125px; border-width: 0px; border-radius: 0px; border-color: rgb(0, 0, 0); border-style: unset; box-shadow: none;"></div>
                                <div class="component image-component image1a788e61b3a2567d930fd61292306c63 lp-flex-container lp-flex-align-center lp-flex-justify-center lp-ie-flex-shrink" data-component-type="image" data-parent-slot-type="HALF" style="clear: both; background-color: transparent; align-items: center; justify-content: center; -webkit-box-pack: center; display: flex; padding: 0px;">
                                    <div style="border: 0px; width: 100%; max-width: 435px;"><img src="https://moosendimages.imgix.net/20191015-2019-1015-2019-101520191015/6ac703be0b574fc58bf3a1ee5bf27521template-35.png?auto=format%2Ccompress&amp;dpr=1&amp;fit=clip&amp;ixjsv=2.2.4&amp;w=435" alt="Email Image" id="1a788e61b3a2567d930fd61292306c63" class="newsletter-image " height="auto" style="box-sizing: border-box; display: block; border-width: 0px; border-color: rgb(0, 0, 0); border-radius: 0px; border-style: unset; width: 100%; height: auto; box-shadow: none;"></div>
                                </div>
                            </div>
                        </div>
                        <div class="landing-page-slot lp-flex-container lp-flex-direction-vertical lp-flex-justify-center lp-flex-1 slot9ff52fa75fe550c1b2c36e952617ded3 HALF responsive-slot" id="9ff52fa75fe550c1b2c36e952617ded3" data-structure-type="slot" data-slot-type="HALF" style="display: flex; flex-grow: 1; flex-direction: column; max-width: 500px; background-color: transparent; justify-content: center; -webkit-box-pack: center; padding: 0px;">
                            <div class="slot-container lp-flex-container lp-flex-direction-vertical lp-ie-flex-shrink" style="background-color: transparent; overflow: visible; display: flex; flex-direction: column; border-radius: 0px;">
                                <div class="component spacer-component spacer821e5f710aa352c08bf901f55cc49ff3" data-component-type="spacer" cellspacing="0" cellpadding="0" id="821e5f710aa352c08bf901f55cc49ff3" style="background-color: transparent; clear: both; height: 57px; border-width: 0px; border-radius: 0px; border-color: rgb(0, 0, 0); border-style: unset; box-shadow: none;"></div>
                                <div class="component text-component text-desktop text334ae91f9b7c50d7a1105e899d16f3cb" data-component-type="text" id="334ae91f9b7c50d7a1105e899d16f3cb" style="padding: 10px; border-width: 0px; border-color: rgb(0, 0, 0); border-radius: 0px; border-style: solid; background-color: transparent; font-family: Arial, Helvetica, sans-serif, Arial, Helvetica, sans-serif; line-height: 1.3; color: rgb(0, 0, 0); font-size: 16px; display: block; overflow-wrap: break-word; word-break: break-word; box-shadow: none;">
                                    <h1 style=""><span style="font-size: 48px;">App Name</span></h1>
                                </div>
                                <div class="text-component text-mobile text334ae91f9b7c50d7a1105e899d16f3cb" data-component-type="text" id="mobile334ae91f9b7c50d7a1105e899d16f3cb" style="border-width: 0px; border-color: rgb(0, 0, 0); border-radius: 0px; border-style: unset; padding: 10px; background-color: transparent; font-family: Arial, Helvetica, sans-serif, Arial, Helvetica, sans-serif; line-height: 1.3; color: rgb(0, 0, 0); font-size: 16px; display: none; overflow-wrap: break-word; word-break: break-word; box-shadow: none;">
                                    <h1 style=""><span style="font-size: 48px;">App Name</span></h1>
                                </div>
                                <div class="component text-component text-desktop text5c6ab35fbf5b5810bd26fff3c49afbc5" data-component-type="text" id="5c6ab35fbf5b5810bd26fff3c49afbc5" style="padding: 10px; border-width: 0px; border-color: rgb(0, 0, 0); border-radius: 0px; border-style: solid; background-color: transparent; font-family: Arial, Helvetica, sans-serif, Arial, Helvetica, sans-serif; line-height: 1.3; color: rgb(0, 0, 0); font-size: 16px; display: block; overflow-wrap: break-word; word-break: break-word; box-shadow: none;">
                                    <p style="margin: 0px;"><span style="font-size: 18px;"><span style="font-family: Hind, sans-serif, Arial, Helvetica, sans-serif;"><span style="color: rgb(153, 153, 153);">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></span></span></p>
                                    <form id="subscribe-mailchimp" novalidate="true" style="" to="https://members-utilities-service-web.m-operations.com/subscribe/null" data-category="Landing Page">&nbsp;</form>
                                </div>
                                <div class="text-component text-mobile text5c6ab35fbf5b5810bd26fff3c49afbc5" data-component-type="text" id="mobile5c6ab35fbf5b5810bd26fff3c49afbc5" style="border-width: 0px; border-color: rgb(0, 0, 0); border-radius: 0px; border-style: unset; padding: 10px; background-color: transparent; font-family: Arial, Helvetica, sans-serif, Arial, Helvetica, sans-serif; line-height: 1.3; color: rgb(0, 0, 0); font-size: 16px; display: none; overflow-wrap: break-word; word-break: break-word; box-shadow: none;">
                                    <p style="margin: 0px;"><span style="font-size: 18px;"><span style="font-family: Hind, sans-serif, Arial, Helvetica, sans-serif;"><span style="color: rgb(153, 153, 153);">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></span></span></p>
                                    <form id="subscribe-mailchimp" novalidate="true" style="" to="https://members-utilities-service-web.m-operations.com/subscribe/null" data-category="Landing Page">&nbsp;</form>
                                </div>
                                <div class="component text-component text-desktop textc9cebf73220d59bb81ea075256a37b64" data-component-type="text" id="c9cebf73220d59bb81ea075256a37b64" style="padding: 10px; border-width: 0px; border-color: rgb(0, 0, 0); border-radius: 0px; border-style: solid; background-color: transparent; font-family: Arial, Helvetica, sans-serif, Arial, Helvetica, sans-serif; line-height: 1.3; color: rgb(0, 0, 0); font-size: 16px; display: block; overflow-wrap: break-word; word-break: break-word; box-shadow: none;">
                                    <div style=""><span style="font-size: 18px;"><span style="font-family: Hind, sans-serif, Arial, Helvetica, sans-serif;">Subscribe for all our news!</span></span></div>
                                </div>
                                <div class="text-component text-mobile textc9cebf73220d59bb81ea075256a37b64" data-component-type="text" id="mobilec9cebf73220d59bb81ea075256a37b64" style="border-width: 0px; border-color: rgb(0, 0, 0); border-radius: 0px; border-style: unset; padding: 10px; background-color: transparent; font-family: Arial, Helvetica, sans-serif, Arial, Helvetica, sans-serif; line-height: 1.3; color: rgb(0, 0, 0); font-size: 16px; display: none; overflow-wrap: break-word; word-break: break-word; box-shadow: none;">
                                    <div style=""><span style="font-size: 18px;"><span style="font-family: Hind, sans-serif, Arial, Helvetica, sans-serif;">Subscribe for all our news!</span></span></div>
                                </div>
                                <div class="component form-component form6c16ddbdead05c7082f1882ecbc3d4c1" data-component-type="form" cellspacing="0" cellpadding="0" width="500" style="padding: 10px 10px 10px 0px; margin: 0px auto; background-color: transparent; border-width: 0px; border-color: rgb(0, 0, 0); border-style: solid; border-radius: 0px; clear: both; position: relative; width: 100%; box-shadow: none;">
                                    <form class="lp-flex-container lp-flex-1 lp-flex-direction-horizontal moosend-subscription-form moosend-subscription-form-__ENTITY_ID__" data-mailing-list-id="fe606a21-5f67-478e-9ab4-c9f091c87836" id="6c16ddbdead05c7082f1882ecbc3d4c1" data-placeholder-color="rgba(0, 0, 0, 0.5)" data-placeholder-font="Arial, Helvetica, sans-serif" data-placeholder-size="14" data-placeholder-style="normal" data-placeholder-weight="normal" data-placeholder-decoration="none" data-recaptcha="" data-wheel="" data-submit-option="message" data-submit-url="" data-pass-params="false" style="display: flex; flex-direction: row; width: 97%; margin: 0px auto 0px 0px;" to="https://members-utilities-service-web.m-operations.com/subscribe/fe606a21-5f67-478e-9ab4-c9f091c87836" data-category="Landing Page">
                                        <div id="primary-Email-6c16ddbdead05c7082f1882ecbc3d4c1" class="form-input-wrapper lp-flex-1" style="width: 100%; position: relative; margin: auto 8px;"><label class="form-input-wrapper-element lp-flex-container form-input-6c16ddbdead05c7082f1882ecbc3d4c1 lp-flex-direction-vertical element-vertical-ie" style="padding: 0px; display: flex; flex-direction: column; width: 100%;"><span class="form-field-label" style="user-select: none; white-space: pre-wrap; word-break: break-word; text-align: left; color: rgb(64, 64, 64); font-size: 16px; font-weight: normal; font-style: normal; text-decoration: none; display: none; line-height: unset; min-height: 20px; font-family: Arial, Helvetica, sans-serif, Arial, Helvetica, sans-serif;">Email<span class="form-field-required" style="color: rgb(240, 52, 52); text-decoration: none; font-weight: normal; font-style: normal;"> *</span></span>
                                                <div class="lp-flex-1" style="display: block; flex: 1 1 auto;"><input class="lp-flex-1 form-input-element" data-primary="true" data-type="email" data-label="Email" data-required="true" type="email" placeholder="Email" name="Email" value="" style="width: 100%; min-width: 0px; outline: none; flex: 1 1 0%; background: rgb(255, 255, 255); padding: 11px; color: rgb(0, 0, 0); font-size: 14px; border-width: 2px; border-color: rgb(201, 201, 201); margin: 0px; border-style: solid; border-radius: 3px; font-weight: normal; font-style: normal; text-decoration: none; height: auto; font-family: Arial, Helvetica, sans-serif, Arial, Helvetica, sans-serif;"></div>
                                            </label></div>
                                        <div id="form-button-container-6c16ddbdead05c7082f1882ecbc3d4c1" class="form-button-element lp-flex-container lp-flex-align-flex-end" style="display: flex; position: relative; padding-left: 0px; align-items: flex-end; -webkit-box-align: end;"><button id="form-button-6c16ddbdead05c7082f1882ecbc3d4c1" type="submit" class="moosend-designer-button" style="background-color: rgb(236, 209, 61); border-color: rgb(0, 0, 0); border-radius: 4px; border-width: 0px; color: rgb(46, 43, 43); font-family: Arial, Helvetica, sans-serif, Arial, Helvetica, sans-serif; font-size: 18px; font-style: normal; font-weight: normal; margin: 0px; text-decoration: none; width: 140px; padding: 0px; height: 43px; transition: all 0.3s ease 0s; opacity: 1; cursor: pointer; position: relative;"><span style="">Almost here</span><i class="font-awesome-icon fa fa-circle-o-notch fa-spin fa-2x" style="z-index: -1; position: absolute; opacity: 0; top: 50%; left: 50%; margin-left: -14px; margin-top: -14px; color: rgb(46, 43, 43); font-size: 28px; transition: all 0.3s ease 0s;"></i></button></div>
                                    </form>
                                    <div class="landing-page-form-message" style="display: none; text-align: center;">
                                        <p style="text-align: left; margin: 0px;">Success! You've been added to the list.</p>
                                    </div>
                                </div>
                                <div class="component spacer-component spaceraa7a32ca787150bda1499f6241fe3f94" data-component-type="spacer" cellspacing="0" cellpadding="0" id="aa7a32ca787150bda1499f6241fe3f94" style="background-color: transparent; clear: both; height: 97px; border-width: 0px; border-radius: 0px; border-color: rgb(0, 0, 0); border-style: unset; box-shadow: none;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div data-structure-type="row" id="9dd35084ce8d5ff186727754066b9ed9" data-row-type="FULL" data-row-id="9dd35084-ce8d-5ff1-8672-7754066b9ed9" data-row-behavior="NORMAL" data-row-repeat-count="5" data-row-sort-products="Orders" data-row-background-color-wide="rgba(46,43,43,1)" data-row-background-image-wide="rgba(46,43,43,1)" data-row-background-repeat-wide="rgba(46,43,43,1)" class="landing-page-row row9dd35084ce8d5ff186727754066b9ed9 responsive-row lp-ie-flex-shrink" style="background-color: rgb(46, 43, 43); background-image: url(&quot;&quot;); background-position: initial; background-repeat: no-repeat; background-size: auto;">
            <div class="inner-row-div" style="vertical-align: top; max-width: 1000px; width: 100%; margin: 0px auto;">
                <div class="border-wrapper" style="width: 100%; background-color: transparent; background-image: url(&quot;&quot;); background-repeat: no-repeat; background-position: initial; border-radius: 0px; padding: 0px;">
                    <div class="row-slot-wrapper lp-flex-container" style="display: flex;">
                        <div class="landing-page-slot lp-flex-container lp-flex-direction-vertical lp-flex-justify-flex-start lp-flex-1 slot68e21653e521503dbf10e830ba0c33e6 FULL responsive-slot" id="68e21653e521503dbf10e830ba0c33e6" data-structure-type="slot" data-slot-type="FULL" style="display: flex; flex-grow: 1; flex-direction: column; max-width: 1000px; background-color: transparent; justify-content: flex-start; -webkit-box-pack: start; padding: 0px;">
                            <div class="slot-container lp-flex-container lp-flex-direction-vertical lp-ie-flex-shrink" style="background-color: transparent; overflow: visible; display: flex; flex-direction: column; border-radius: 0px;">
                                <div class="component spacer-component spacerf247f961cd1e5e8582ff84e2d969b0e8" data-component-type="spacer" cellspacing="0" cellpadding="0" id="f247f961cd1e5e8582ff84e2d969b0e8" style="background-color: transparent; clear: both; height: 100px; border-width: 0px; border-radius: 0px; border-color: rgb(0, 0, 0); border-style: unset; box-shadow: none;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        (function() {

            var recaptchaInstance;

            var grecaptchaTries = 0;

            // This code will be added to a <Script> tag, 
            // at the end of the <body> element 


            var padTo2Digits = function(num) {
                return num.toString().padStart(2, '0');
            }

            var formatDate = function(date = new Date()) {
                return [
                    date.getFullYear(),
                    padTo2Digits(date.getMonth() + 1),
                    padTo2Digits(date.getDate()),
                ].join('-');
            }

            var isIOS = function() {
                return [
                        'iPad Simulator',
                        'iPhone Simulator',
                        'iPod Simulator',
                        'iPad',
                        'iPhone',
                        'iPod'
                    ].includes(navigator.platform)
                    // iPad on iOS 13 detection
                    ||
                    (navigator.userAgent.includes("Mac") && "ontouchend" in document)
            }

            var postData = function(url, data, form, callback) {

                if (typeof recaptchaInstance !== "undefined" && !grecaptcha.getResponse(recaptchaInstance)) {
                    var recaptcha = document.getElementById('recaptcha' + form.id);

                    var message = document.createElement('div');
                    message.innerText = 'Please validate using the recaptcha';

                    message.className = 'form-input-error-message' + recaptcha.className.replace('g-recaptcha', '');
                    message.style.fontSize = '12px';
                    message.style.color = '#d8000c';
                    message.style.fontStyle = 'italic';
                    message.style.margin = '5px 0px 20px';

                    recaptcha.parentNode.insertBefore(message, recaptcha.nextSibling);

                    return;
                }

                var submitOption = form.getAttribute('data-submit-option');
                var passParams = form.getAttribute('data-pass-params');

                var button = document.getElementById('form-button-' + form.id);

                button.disabled = true;
                button.style.cursor = 'not-allowed';

                button.children[0].style.opacity = 0;
                button.children[0].style.zIndex = -1;
                button.children[1].style.opacity = 1;
                button.children[1].style.zIndex = 1;

                return fetch(url, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json; charset=utf-8",
                            // "Content-Type": "application/x-www-form-urlencoded",
                        },
                        body: JSON.stringify(data)
                    })
                    .then(function(response) {

                        button.disabled = false;
                        button.style.cursor = 'pointer';

                        button.children[0].style.opacity = 1;
                        button.children[0].style.zIndex = 1;
                        button.children[1].style.opacity = 0;
                        button.children[1].style.zIndex = -1;

                        if (response.ok) {

                            var eventName = 'success-form-submit-' + '__ENTITY_ID__';
                            var event = new CustomEvent(eventName, {
                                detail: {
                                    email: data.ContactEmail
                                }
                            });
                            document.dispatchEvent(event);

                            var submitted = window.localStorage.getItem('lp_form_submitted-' + '__ENTITY_ID__');
                            if (submitted !== 'true') {

                                var email = data.ContactEmail;
                                var name = data.ContactName;
                                var fields = {};

                                if (data.Fields && data.Fields.length) {
                                    for (var i = 0; i < data.Fields.length; i++) {
                                        fields[data.Fields[i].Name] = data.Fields[i].Value;
                                    }
                                }

                                // Track_LP_Form_Submitted
                                window.localStorage.setItem('lp_form_submitted-' + '__ENTITY_ID__', 'true');
                            }

                            if (submitOption) {
                                if (submitOption === 'redirect' || submitOption === 'redirectExternal') {

                                    var redirectUrlAttribute = form.getAttribute('data-submit-url');

                                    var redirectUrl = redirectUrlAttribute.includes('http') ? redirectUrlAttribute : 'http://' + redirectUrlAttribute;
                                    if (passParams === 'true') {
                                        if (window.location.search) {
                                            var paramString = window.location.search;
                                            if (redirectUrl.includes('?')) {
                                                redirectUrl = redirectUrl + paramString.replace('?', '&');
                                            } else {
                                                redirectUrl = redirectUrl + paramString;
                                            }
                                        }

                                        var dataParams = '';
                                        for (var key in data) {
                                            if (data[key] && key !== 'Fields') {
                                                dataParams += '&' + encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
                                            } else if (data[key] && key === 'Fields') {
                                                var fields = data[key];
                                                for (var i = 0; i < fields.length; i++) {
                                                    dataParams += '&' + encodeURIComponent(fields[i].Name) + '=' + encodeURIComponent(fields[i].Value);
                                                }
                                            }
                                        }

                                        if (dataParams) {
                                            if (!redirectUrl.includes('?')) {
                                                redirectUrl = redirectUrl + dataParams.replace('&', '?');
                                            } else {
                                                redirectUrl = redirectUrl + dataParams;
                                            }
                                        }

                                    }

                                    window.top.location.href = redirectUrl;
                                } else if (submitOption === 'close') {
                                    formCloseEvent();
                                } else if (submitOption === 'message') {
                                    form.nextSibling.style.display = 'block';
                                    form.style.setProperty('display', 'none', 'important');
                                    if (callback) {
                                        callback();
                                    }
                                }
                            }

                        } else {
                            response.json()
                                .then(function(json) {

                                    var errors = json.ValidationErrors;

                                    var handledErrors = [];

                                    for (var i = 0; i < errors.length; i++) {
                                        var error = errors[i];

                                        if (!handledErrors.includes(error.Field)) {

                                            var regex = /[(.*?)]/;

                                            var matches = error.Field.match(regex);

                                            var fieldDiv;
                                            var errorMessage;

                                            if (matches) {
                                                var field = error.Field.split('.')[0].split('[')[1].replace(']', '');
                                                var customField = data.Fields[field];
                                                var name = customField.Name.replace(/ /g, '');

                                                var fieldDiv = document.getElementById(name + '-' + form.id);

                                                errorMessage = error.Message.replace("'Value'", fieldDiv.firstChild.firstChild.innerText);

                                            } else {
                                                var field = error.Field;
                                                var fieldName = field === 'ContactEmail' ? 'Email' : 'Name';

                                                fieldDiv = document.getElementById('primary-' + fieldName + '-' + form.id);

                                                errorMessage = error.Message.replace(field === 'ContactEmail' ? "'Contact Email'" : "Contact Name", fieldName);

                                            }

                                            if (fieldDiv.children.length < 2) {

                                                var isRowForm = form.className.includes('lp-flex-direction-horizontal') ? true : false;

                                                var labelContainer = fieldDiv.firstChild;
                                                var margin = labelContainer.style.flexDirection === 'column' ? '0' : labelContainer.firstChild.style.flexBasis;

                                                var message = document.createElement('div');
                                                message.innerText = errorMessage;

                                                message.className = 'form-input-error-message';
                                                message.style.fontSize = '12px';
                                                message.style.color = '#d8000c';
                                                message.style.fontStyle = 'italic';
                                                message.style.margin = '5px 0 0 ' + margin;
                                                if (isRowForm) {
                                                    message.style.position = 'absolute';
                                                    message.style.bottom = '-19px';
                                                    message.style.left = 0;
                                                }

                                                fieldDiv.appendChild(message);

                                                handledErrors.push(error.Field);
                                            }

                                        }
                                    }
                                });
                        }
                    })
                    .catch(function(e) {

                        button.children[0].style.opacity = 1;
                        button.children[0].style.cursor = 'pointer';
                        button.children[0].disabled = false;
                        button.children[1].style.opacity = 0;

                        console.error(e);
                    });
            }

            var getFormData = function(form) {
                var valuesObj = {}
                var valuesArray = [];

                var inputs = form.getElementsByTagName('input');

                if (inputs && inputs.length > 0) {
                    var validInputs = validateFormInputs(inputs, form);
                    if (!validInputs) {
                        return false;
                    }
                    var inputValues = getCollectionValues(inputs);
                    valuesArray = valuesArray.concat(inputValues);
                }

                valuesObj = correctObjectStructure(valuesArray);

                var mailingListId = form.getAttribute('data-mailing-list-id');
                var source = '__ENTITY_NAME__';
                var entityId = '__ENTITY_ID__';
                var websiteId = '__WEBSITE_ID__';
                var category = form.getAttribute('data-category');
                valuesObj = Object.assign(valuesObj, {
                    'MailingListId': mailingListId,
                    Category: category,
                    Source: source,
                    EntityId: entityId,
                    WebsiteId: websiteId
                });
                return valuesObj;
            }

            var correctObjectStructure = function(collection) {
                // CustomFields
                var valuesObj = {};
                var customFields = [];
                for (var i = 0; i < collection.length; i++) {
                    var field = collection[i];
                    if (field.Primary && field.Name === 'Name') {
                        valuesObj = Object.assign(valuesObj, {
                            'ContactName': field.Value
                        });
                    } else if (field.Primary && field.Name === 'Email') {
                        valuesObj = Object.assign(valuesObj, {
                            'ContactEmail': field.Value
                        });
                    } else {
                        delete field.Primary;
                        customFields.push(field);
                    }
                }
                valuesObj = Object.assign(valuesObj, {
                    'Fields': customFields
                });
                return valuesObj;
            }

            var validateFormInputs = function(collection, form) {

                clearAllErrorMessages();

                var isRowForm = form.className.includes('lp-flex-direction-horizontal') ? true : false;
                var isValid = true;

                for (var i = 0; i < collection.length; i++) {
                    var required = collection[i].getAttribute('data-required');

                    var name = collection[i].getAttribute('data-label');
                    var value = collection[i].type === 'checkbox' ? collection[i].checked : collection[i].value;

                    if (required === 'true' && !value) {

                        var labelContainer = collection[i].parentNode.parentNode;
                        var margin = labelContainer.style.flexDirection === 'column' ? '0' : labelContainer.firstChild.style.flexBasis;

                        var message = document.createElement('div');
                        message.innerText = name + ' is required!';

                        message.className = 'form-input-error-message';
                        message.style.fontSize = '12px';
                        message.style.color = '#d8000c';
                        message.style.fontStyle = 'italic';
                        message.style.margin = '5px 0 0 ' + margin;
                        if (isRowForm) {
                            message.style.position = 'absolute';
                            message.style.bottom = '-19px';
                            message.style.left = 0;
                        }

                        // if (labelContainer.parentNode.children.length < 2){
                        //     labelContainer.parentNode.appendChild(message);
                        // }

                        labelContainer.parentNode.appendChild(message);

                        isValid = false;

                    }
                }
                return isValid;
            }

            var getCollectionValues = function(collection) {
                var valuesArray = [];
                for (var i = 0; i < collection.length; i++) {
                    var value;
                    if (collection[i].type === 'hidden') {
                        value = collection[i].checked ? collection[i].checked : collection[i].value;
                    } else {
                        value = collection[i].type === 'checkbox' ? collection[i].checked : collection[i].value;
                    }
                    var name = collection[i].name;
                    var required = collection[i].getAttribute('data-required');
                    // var validatable = collection[i].getAttribute('data-validate');
                    var primary = collection[i].getAttribute('data-primary');
                    var type = collection[i].getAttribute('data-type');
                    // valuesArray.push({Name: name, Value: value, Required: required, Validatable: validatable, Primary: primary, Type: type});
                    valuesArray.push({
                        Name: name,
                        Value: value,
                        Required: required,
                        Primary: primary,
                        Type: type
                    });
                }
                return valuesArray;
            }

            var buttonCallback = function(onClick, callback, e) {
                e.preventDefault();
                var formData = getFormData(this);
                if (formData) {
                    var submitTo = this.getAttribute('to');
                    postData(submitTo, formData, this, callback);
                }
                if (onClick) {
                    onClick(e);
                }
            }

            var addSubmitEventToButton = function(form) {
                var formButton = form.getElementsByTagName('button');

                var formId = form.getAttribute('id');
                var callback;
                var wheel = document.getElementById('wheel' + formId);
                if (wheel) {
                    callback = prepareWheel(wheel);
                }

                if (formButton && formButton.length) {
                    if (!formButton[0].onclick) {
                        formButton[0].onclick = buttonCallback.bind(form, undefined, callback);
                    } else {
                        formButton[0].onclick = buttonCallback.bind(form, formButton[0].onclick, callback);
                    }
                }
            }

            var readyFormSubmit = function() {
                var forms = document.getElementsByClassName('moosend-subscription-form-__ENTITY_ID__');

                for (var i = 0; i < forms.length; i++) {
                    var form = forms[i];

                    addSubmitEventToButton(form);

                    dateTimeFocus(form);

                    checkboxOnClickEvents(form);

                    prepareFormSelects(form);

                    prepareTelFields(form);

                    prefillFormFields(form);

                    restrictNumberFields(form);

                    renderRecaptcha(form);

                }
            }

            var dateTimeFocus = function(form) {
                var iOS = isIOS();
                var dateElements = form.getElementsByClassName("form-input-date-element");
                if (dateElements && dateElements.length) {
                    for (var i = 0; i < dateElements.length; i++) {
                        dateElements[i].onfocus = function() {
                            var type = this.getAttribute('data-type');
                            if (this.value === '') {
                                this.type = type === "date" ? "date" : "datetime-local";
                                this.focus();
                            }
                        }

                        dateElements[i].onblur = function() {
                            if (this.value === '') {
                                this.type = "text";
                                this.blur();
                            }
                        }

                        if (iOS && !dateElements[i].value) {
                            dateElements[i].value = formatDate();
                        }
                    }
                }
            }

            var checkboxOnClickEvents = function(form) {
                var checkboxes = form.getElementsByClassName("form-input-checkbox-element");
                for (var i = 0; i < checkboxes.length; i++) {
                    var readOnly = checkboxes[i].getAttribute('data-readOnly');
                    if (readOnly !== 'true') {
                        checkboxes[i].onclick = function() {
                            if (this.checked) {
                                this.nextSibling.style.display = 'block';
                            } else {
                                this.nextSibling.style.display = 'none';
                            }
                        }
                    }
                }
            }

            var clearErrorMessagesCallback = function() {
                var inputWrappers = document.getElementsByClassName("form-input-wrapper");
                if (inputWrappers && inputWrappers.length) {
                    for (var i = 0; i < inputWrappers.length; i++) {
                        var inputElement = inputWrappers[i].getElementsByTagName("input");
                        if (inputElement && inputElement.length) {
                            inputElement[0].oninput = function(e) {
                                var errorElement = this.getElementsByClassName('form-input-error-message');
                                if (errorElement && errorElement.length) {
                                    this.removeChild(errorElement[0]);
                                }
                            }.bind(inputWrappers[i]);
                        }
                    }
                }
            }

            var clearAllErrorMessages = function() {
                var errorElements = [].concat(Array.from(document.querySelectorAll(".form-input-error-message")));
                for (var errorCount = 0; errorCount < errorElements.length; errorCount++) {
                    if (errorElements[errorCount]) {
                        errorElements[errorCount].parentNode.removeChild(errorElements[errorCount]);
                    }
                }
            }

            var prepareFormSelects = function(form) {
                var selectElements = form.getElementsByClassName("form-input-select-element");

                for (var i = 0; i < selectElements.length; i++) {
                    var optionsContainer = selectElements[i] && selectElements[i].getElementsByClassName("form-select-option-container")[0];
                    if (optionsContainer) {


                        var input = selectElements[i].getElementsByTagName("input")[0];

                        var toggleDisplay = function(container) {
                            if (container.style.display === "none") {
                                container.style.display = "block";
                            } else {
                                container.style.display = "none";
                            }
                        }

                        var readOnly = input.getAttribute('data-readOnly');

                        if (readOnly !== 'true') {
                            input.onclick = toggleDisplay.bind(this, optionsContainer);
                        }

                        input.onblur = function(container) {
                            setTimeout(function() {
                                container.style.display = "none";
                            }, 10);
                        }.bind(this, optionsContainer);

                        var options = optionsContainer.children;

                        function createInputCb(index) {
                            var inp = selectElements[index].getElementsByTagName("input")[0];
                            return function(option) {
                                inp.value = option.textContent;
                            };
                        }

                        for (var j = 0; j < options.length; j++) {
                            var cb = createInputCb(i);
                            options[j].onmousedown = cb.bind(this, options[j])
                        }

                    }
                }
            }

            var prepareTelFields = function(form) {
                if (!window.intlTelInput) {
                    setTimeout(function() {
                        return prepareTelFields(form);
                    }, 200);
                }

                var telElements = form.getElementsByClassName("form-tel-input-element");
                for (var i = 0; i < telElements.length; i++) {
                    window.intlTelInput(telElements[i], {});
                }
            }

            var addTrackToButtons = function() {
                var buttons = document.getElementsByClassName("moosend-designer-button");

                for (var i = 0; i < buttons.length; i++) {
                    if (!buttons[i].onclick) {
                        buttons[i].onclick = function(e) {
                            var clicked = window.localStorage.getItem('lp_button_clicked-' + '__ENTITY_ID__');
                            if (clicked !== 'true') {
                                // Track_LP_Button_Clicked
                                window.localStorage.setItem('lp_button_clicked-' + '__ENTITY_ID__', 'true');
                            }
                        }
                    }
                }

            }

            var trackVisit = function() {
                var visited = window.localStorage.getItem('lp_visited-' + '__ENTITY_ID__');
                if (visited !== 'true') {
                    // Track_LP_Visit
                    window.localStorage.setItem('lp_visited-' + '__ENTITY_ID__', 'true');
                }
            }

            var formatDigit = function(digit) {
                if (digit.length === 1) {
                    return '0' + digit;
                }
                return digit;
            }

            var getCountdownDate = function(date) {

                var currentDate = new Date();
                var selectedDate = new Date(date);

                var delta = Math.abs(selectedDate - currentDate) / 1000;

                var days = Math.floor(delta / 86400);
                delta -= days * 86400;

                var hours = Math.floor(delta / 3600) % 24;
                delta -= hours * 3600;

                var minutes = Math.floor(delta / 60) % 60;
                delta -= minutes * 60;

                var seconds = Math.floor(delta % 60);

                return {
                    days: formatDigit(days.toString()),
                    hours: formatDigit(hours.toString()),
                    minutes: formatDigit(minutes.toString()),
                    seconds: formatDigit(seconds.toString())
                };

            }

            var runCountdownTimers = function() {
                var timers = document.querySelectorAll('div[data-timer-type="moosend-countdown-timer"]');

                if (timers && timers.length) {

                    for (var i = 0; i < timers.length; i++) {
                        var date = timers[i].getAttribute('data-component-date');

                        var textTimer = timers[i].getAttribute('data-component-text-timer');

                        var setCounters = function(timer, dateArg) {
                            var counters = getCountdownDate(dateArg);
                            var daysBox = timer.querySelector('[data-box-type="days"');
                            var hoursBox = timer.querySelector('[data-box-type="hours"');
                            var minutesBox = timer.querySelector('[data-box-type="minutes"');
                            var secondsBox = timer.querySelector('[data-box-type="seconds"');

                            daysBox.textContent = counters.days;
                            hoursBox.textContent = counters.hours;
                            minutesBox.textContent = counters.minutes;
                            secondsBox.textContent = counters.seconds;
                        };

                        if (textTimer === 'true') {

                            var setInitialCounters = function(timer, dateArg) {
                                var counters = getCountdownDate(dateArg);

                                timers[i].innerHTML = timers[i].innerHTML.replace(
                                    '[days]',
                                    '<span data-box-type="days">' + counters.days + '</span>'
                                );
                                timers[i].innerHTML = timers[i].innerHTML.replace(
                                    '[hours]',
                                    '<span data-box-type="hours">' + counters.hours + '</span>'
                                );
                                timers[i].innerHTML = timers[i].innerHTML.replace(
                                    '[minutes]',
                                    '<span data-box-type="minutes">' + counters.minutes + '</span>'
                                );
                                timers[i].innerHTML = timers[i].innerHTML.replace(
                                    '[seconds]',
                                    '<span data-box-type="seconds">' + counters.seconds + '</span>'
                                );
                            };

                            setInitialCounters(timers[i], date);

                        } else {
                            setCounters(timers[i], date);
                        }

                        setInterval(setCounters.bind(this, timers[i], date), 1000);

                    }
                }
            }

            var formCloseEvent = function() {
                var eventName = 'moosend-form-close-event-' + '__ENTITY_ID__';
                var event = new CustomEvent(eventName, {});
                document.dispatchEvent(event);
            }

            var addCloseEventListeners = function() {
                var closeElements = document.getElementsByClassName("moosend-form-close-element-__ENTITY_ID__");
                for (var i = 0; i < closeElements.length; i++) {
                    if (closeElements[i]) {
                        closeElements[i].onclick = formCloseEvent;
                    }
                }
            }

            var createSearchObject = function() {
                var pairs = window.location.search.substring(1).split("&"),
                    obj = {},
                    pair;

                for (var i = 0; i < pairs.length; i++) {
                    if (pairs[i] === "") continue;
                    pair = pairs[i].split("=");
                    obj[decodeURIComponent(pair[0].toLowerCase())] = decodeURIComponent(pair[1]);
                }

                return obj;
            }

            var prefillFormFields = function(form) {
                var urlParams = createSearchObject();
                var inputs = form.getElementsByTagName('input');
                for (var i = 0; i < inputs.length; i++) {
                    if (inputs[i]) {
                        var inputName = inputs[i].name.toLowerCase();
                        if (urlParams[inputName]) {
                            if (inputs[i].type === 'checkbox' && urlParams[inputName] === 'true') {
                                inputs[i].checked = true;
                                inputs[i].nextSibling.style.display = 'block';
                            } else {
                                inputs[i].value = urlParams[inputName];
                            }
                        }
                    }
                }
            }

            var restrictNumberFields = function(form) {
                var inputs = form.querySelectorAll('input[type="number"]');
                for (var i = 0; i < inputs.length; i++) {
                    if (inputs[i]) {

                        inputs[i].onkeypress = function(e) {
                            if (e.keyCode === 46 && e.target.value.includes('.')) {
                                e.preventDefault();
                            }
                            var e = e || window.event;
                            var charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
                            var charStr = String.fromCharCode(charCode);

                            var rgx = /^[0-9.-]+$/;
                            if (!rgx.test(charStr)) {
                                e.preventDefault();
                            }


                        }

                        inputs[i].onpaste = function(e) {
                            var clipData = e.clipboardData;
                            var content = clipData.getData('Text');
                            var inputValue = content.replace(/e/g, '').replace(/,/g, '.');
                            e.target.value = e.target.value + inputValue;
                            return false;
                        }

                    }
                }
            }

            var checkAndLoadFontAwesomeCss = function() {
                var spanElement = document.createElement('span');

                spanElement.className = 'fa';
                spanElement.style.display = 'none';
                document.body.insertBefore(spanElement, document.body.firstChild);

                if (window.getComputedStyle(spanElement, null).getPropertyValue('font-family').toLowerCase() !== 'fontawesome') {
                    var link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = 'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css';
                    document.head.append(link);
                }

                document.body.removeChild(spanElement);

            };


            var prepareWheel = function(wheel) {
                var id = wheel.getAttribute('id');
                var slices = JSON.parse(wheel.getAttribute('data-slices'));

                var tot = slices.length;
                var ctx = document.querySelector('#wheel-canvas-' + id).getContext('2d');
                var dia = ctx.canvas.width;
                var rad = dia / 2;
                var PI = Math.PI;
                var TAU = 2 * PI;
                var arc = TAU / slices.length;
                var friction = 0.972; // 0.995=soft, 0.99=mid, 0.98=hard
                var angVelMin = 0.002; // Below that number will be treated as a stop
                var angVelMax = 0; // Random ang.vel. to acceletare to 
                var angVel = 0; // Current angular velocity
                var ang = 0; // Angle rotation in radians
                var isSpinning = false;
                var isAccelerating = false;
                var shouldStop = false;
                var winningIndex;
                var shouldWinIndex;
                var couponCode;

                slices.forEach((slice, i) => {
                    var ang = arc * i;
                    ctx.save();

                    // COLOR
                    ctx.beginPath();
                    ctx.fillStyle = slice.background_color;
                    ctx.moveTo(rad, rad);
                    ctx.arc(rad, rad, rad, ang, ang + arc);
                    ctx.lineTo(rad, rad);
                    ctx.fill();

                    // TEXT
                    ctx.translate(rad, rad);
                    ctx.rotate(ang + arc / 2);
                    ctx.textAlign = 'right';
                    ctx.fillStyle = '#fff';
                    ctx.font = '18px Arial';
                    ctx.fillText(slice.label, rad - 20, 5);

                    ctx.strokeStyle = 'white';
                    ctx.lineWidth = 2;
                    ctx.stroke();

                    ctx.restore();
                });

                var getIndex = function() {
                    return Math.floor(tot - ang / TAU * tot) % tot
                };

                var rotate = function() {
                    ctx.canvas.style.transform = 'rotate(' + (ang - PI / 2) + 'rad)';
                }

                // var copyButton = document.getElementById('wheel-button-' + id + '-copy');
                var successMessage = document.getElementById('wheel-of-fortune-message-' + id);

                var frame = function() {

                    if (!isSpinning) return;

                    if (angVel >= angVelMax) isAccelerating = false;

                    // Accelerate
                    if (isAccelerating) {
                        angVel ||= angVelMin; // Initial velocity kick
                        angVel *= 1.06; // Accelerate
                    }

                    if (shouldStop && !shouldWinIndex && getIndex() === winningIndex) {
                        shouldWinIndex = winningIndex;
                        shouldStop = false;
                    }

                    // Decelerate
                    else {
                        if (typeof shouldWinIndex !== 'undefined') {

                            isAccelerating = false;
                            angVel *= friction; // Decelerate by friction  

                            // SPIN END:
                            if (angVel < angVelMin) {
                                shouldStop = false;
                                winningIndex = undefined;
                                shouldWinIndex = undefined;
                                isSpinning = false;
                                var slice = slices[getIndex()];
                                // copyButton.parentNode.style.display = 'flex';
                                successMessage.style.display = 'block';
                                angVel = 0;
                            }
                        }
                    }

                    ang += angVel; // Update angle
                    ang %= TAU; // Normalize angle
                    rotate(); // CSS rotate!
                };

                var engine = function() {
                    frame();
                    requestAnimationFrame(engine);
                };

                var callback = function() {

                    if (isSpinning) return;

                    var winningSlice = weightedSample(slices.filter((item) => {
                        return item.type === 'win';
                    }).sort(function(a, b) {
                        return a.probability - b.probability;
                    }));

                    couponCode = winningSlice.couponCode;

                    successMessage.innerHTML = successMessage.innerHTML.replace(
                        '[couponcode]',
                        winningSlice.couponCode
                    );

                    winningIndex = slices.findIndex((item) => {
                        return winningSlice.id === item.id;
                    });

                    isSpinning = true;
                    isAccelerating = true;
                    angVelMax = 0.34;
                    setTimeout(function() {
                        shouldStop = true;
                    }, 3500)
                }

                // copyButton.onclick = function(){
                //     copyToClipboard(couponCode);
                // }

                rotate(); // Initial rotation
                engine(); // Start engine!
                return callback;
            }

            var rand = function(m, M) {
                return Math.random() * (M - m + 1) + m;
            }

            var weightedSample = function(pairs) {
                var n = Math.random() * 100;
                var match = pairs.find(({
                    probability
                }) => n <= probability);
                return match ? match : last(pairs);
            }

            var last = function(array) {
                return array[array.length - 1];
            }

            var copyToClipboard = function(text) {
                if (text) {
                    var valueElement = document.createElement('textarea');
                    valueElement.innerHTML = text;
                    document.body.appendChild(valueElement);
                    valueElement.select();
                    document.execCommand('copy');
                    valueElement.remove();
                    alert('Coupon code (' + text + ') has been copied to clipboard');
                }
            }

            var renderRecaptcha = function(form) {
                var recaptchaElement = document.getElementById('recaptcha' + form.id)
                if (recaptchaElement) {
                    try {
                        if (!grecaptcha && grecaptchaTries < 10) {
                            setTimeout(function() {
                                grecaptchaTries = grecaptchaTries + 1;
                                renderRecaptcha(form);
                            }, 500);
                            return;
                        }
                        recaptchaInstance = grecaptcha.render(recaptchaElement.id, {
                            'sitekey': recaptchaElement.getAttribute('data-sitekey')
                        });
                    } catch (e) {
                        setTimeout(function() {
                            grecaptchaTries = grecaptchaTries + 1;
                            renderRecaptcha(form);
                        }, 1000);
                    }
                }
            }



            addCloseEventListeners();



            runCountdownTimers();

            addTrackToButtons();

            readyFormSubmit();

            clearErrorMessagesCallback();

            trackVisit();

            checkAndLoadFontAwesomeCss();

        })();
    </script>
</body>

</html>`;
