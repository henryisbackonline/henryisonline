// Custom date filters from eleventy-base-blog

import { DateTime } from "luxon";

export default function(eleventyConfig) {
	eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
		// Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
		return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(format || "dd LLLL yyyy");
	});

	eleventyConfig.addFilter("htmlDateString", (dateObj) => {
		// dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
		return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat('yyyy-LL-dd');
	});

    eleventyConfig.addFilter("yearString", (dateObj) => {
		// This is identical to the above function
        // The only difference is the removal of the month and year portions of the date format
        //
        // I use this to get the year a post was created and create a matching folder in the 
        // output directory, whoch then contains the slug of the post title.
		return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat('yyyy');
	});
};