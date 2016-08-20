﻿//App Stuff start
function renderAppPanel(htmlAppBtns) {
    var html = ""
	$.each(htmlAppBtns, function (i, htmlAppBtn) {
	    html += htmlAppBtn
	})
	return "<div>" + html + "</div>"
}

function renderAppBtn(app) {
	var tpl = `<btn id="${replacaSpacesWithUnderscore(app.AppName)}_${app.Id}" class='btn btn-block btn-primary-ui-app'>{{AppName}}</btn>`;
	return Mustache.to_html(tpl, app)
}
//App End

//Category Stuff Start
function renderCategories(categories) {
    var html = ""
    $.each(categories, function (i, category) {
    	html += renderCategoryBtn(category)
    })
    return "<div>" + html + "</div>"
}

function renderCategoryBtn(category) {
	var tpl = `<btn id="${replacaSpacesWithUnderscore(category.Name)}_${category.Id}" class='btn btn-block btn-primary-ui-category' data-model='category'>{{Name}}</btn>`;
	return Mustache.to_html(tpl, category)
}
//Category End

//Plac Stuff Start
function renderPlaces(places) {
	var html = ""
	$.each(places, function (i, place) {
		html += renderPlaceBtn(place)
	})
	return "<div>" + html + "</div>"
}

function renderPlaceBtn(place) {
	var tpl = `<btn id="${replacaSpacesWithUnderscore(place.Name)}_${place.Id}" class='btn btn-sm btn-primary-ui' data-model='place'>{{Name}}</btn>`;
	return Mustache.to_html(tpl, place)
}

function renderPlaceContent(place) {
	try{
		if(!place instanceof Place)
			throw new Error("the function renderPlaceContent() takes only obj of Type Place!")
	} catch (err) {
		console.warn(err.message)
	}

	var tpl =
    `<h6 class="text-info"><strong >Namn: {{Name}}</strong><h6>` +
	`<h6 class="text-info"><strong >Info: {{Description}}</strong><h6>` +
	`<h6 class="text-info"><strong >Sparad av: {{User}}</strong><h6>` +
    `<div class="panel panel-default"` +
        `<div class="panel panel-heading"` +
            `Minnesplatsens väderdata idag!` +
        `</div>` +
        `<div class="panel-body">` +
            `{{#Forecasts}}{{>Forecast}}{{/Forecasts}}` +
        `</div` +
    `</div>`;
                

    //Forecasts
	var partials =
    {
    	Forecast:
        `<div class="well">` +
            `<h6>asdf</h6>` +
        `</div>`
    }
	return Mustache.to_html(tpl, place, partials)

}
//Place End