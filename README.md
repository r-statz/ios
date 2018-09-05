# ios
A repo for the iOS app

Mobile App Stories

Share Menu

As a user on iOS
When I'm on Safari / Chrome / Other apps
And I open the system share menu
I want to see the option to share to FakerFact in the lower (gray) section
![Screenshot](./img/systemShareButton.png)

When I tap the FakerFact icon
I want it to show me the results in the mobile app
![Screenshot](./img/mainScreen.png)

Home Screen

As a user on iOS
When I open the FakerFact app
Then I should see a page where I can enter a URL
(And when I rotate the phone it should look good still)
And when I enter a URL and tap "Check"
Then I should see the results in the show view
![Screenshot](./img/homePage.png)

Error Handling

When I enter a URL
And the API returns a non-200 code
Then I want to see an error message on the screen
![Screenshot](./img/errorScreen.png)
API

To make a call, issue a GET request to https://api.fakerfact.org/api
Find the link labeled "predictions" and make a POST request to that URL with:
content-type: application/json


JSON body like {"url": "http://…"}

curl -X POST \
  https://api.fakerfact.org/api/predictions \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -d '{
	"url": "https://www.huffingtonpost.com/entry/hurricane-maria-death-toll_us_5b8582bde4b0162f471cf46e"
}'

You'll one of two types of responses:

{
    "_links": {
        "self": {
            "href": "https://api.fakerfact.org/api/predictions/5744930236399616"
        }
    },
    "content_src": "html",
    "id": 5744930236399616,
    "model_checksum": "b8a302bb2db176e8a0d25aa2202579bb",
    "predictions": [
        {
            "color": "#67E09B",
            "display_name": "Journalism",
            "group": "primary",
            "name": "Journalism",
            "value": 0,
            "version": "2018_08_07_jour_400_300_200_100_tz_40_40_30_cnn_cnn_T_T_adagrad_p980_r962.v21.tar.gz"
        },
        {
            "color": "#59C9CA",
            "display_name": "Wiki",
            "group": "experimental",
            "name": "Wiki",
            "value": 0.17,
            "version": "2018-04-02_wikipedia.ln74.v1"
        },
        {
            "color": "#D1BAFA",
            "display_name": "Opinion",
            "group": "experimental",
            "name": "Opinion",
            "value": 0.92,
            "version": "2018_08_28_opin_400_300_200_100_tz_40_40_30_cnn_cnn_T_T_adagrad_first_loss_50_50_p970_r832.v21.tar.gz"
        },
        {
            "color": "#D5CE8E",
            "display_name": "Satire",
            "group": "experimental",
            "name": "Satire",
            "value": 0,
            "version": "2018_09_28_sat_jour_400_300_200_100_tz_40_50_30_cnn_cnn_T_T_adagrad_p980_r905.v21.tar.gz"
        },
        {
            "color": "#E7A546",
            "display_name": "Sensational",
            "group": "experimental",
            "name": "Sensational",
            "value": 0.73,
            "version": "2018_08_10_sens_jour_400_300_200_100_tz_40_50_30_cnn_cnn_T_T_adagrad_p974_r751.v21.tar.gz"
        },
        {
            "color": "#E28683",
            "display_name": "Agenda Driven",
            "group": "experimental",
            "name": "AgendaDriven",
            "value": 0,
            "version": "2018_08_28_unr_400_300_200_100_tz_40_40_30_both_cnn_T_T_adagrad_max_loss_75_25_p913_r938.v21.tar.gz"
        },
        {
            "color": "#999999",
            "display_name": "Hate",
            "group": "debug",
            "name": "Hate",
            "value": 0,
            "version": null
        }
    ],
    "time_to_predict": 0.9978113709948957,
    "title": "Hurricane Maria Death Toll Estimate Climbs To Nearly 3,000: Study",
    "url": "https://www.huffingtonpost.com/entry/hurricane-maria-death-toll_us_5b8582bde4b0162f471cf46e",
    "walt_says": "Walt says this one grabs your attention, but other articles are probably better to get just the facts."
}

Or if there's an error the API will return a 500:

{
    "errors": [
        {
            "code": 1,
            "message": "Article could not be downloaded"
        }
    ],
    "url": "https://www.huffingtonpost.com/entry/hurr1cf46e"
}

The codes / messages would be different, but the structure is the same.


![Screenshot](./img/technicalNotes.png)
