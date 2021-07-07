// Arreglo de objetos con datos de paises

const countryList = [
  { value: 'Bangladesh', text: 'Bangladesh' },
  { value: 'Belgium', text: 'Belgium' },
  { value: 'Burkina Faso', text: 'Burkina Faso' },
  { value: 'Bulgaria', text: 'Bulgaria' },
  { value: 'Bosnia and Herzegovina', text: 'Bosnia and Herzegovina' },
  { value: 'Barbados', text: 'Barbados' },
  { value: 'Wallis and Futuna', text: 'Wallis and Futuna' },
  { value: 'Saint Barthelemy', text: 'Saint Barthelemy' },
  { value: 'Bermuda', text: 'Bermuda' },
  { value: 'Brunei', text: 'Brunei' },
  { value: 'Bolivia', text: 'Bolivia' },
  { value: 'Bahrain', text: 'Bahrain' },
  { value: 'Burundi', text: 'Burundi' },
  { value: 'Benin', text: 'Benin' },
  { value: 'Bhutan', text: 'Bhutan' },
  { value: 'Jamaica', text: 'Jamaica' },
  { value: 'Bouvet Island', text: 'Bouvet Island' },
  { value: 'Botswana', text: 'Botswana' },
  { value: 'Samoa', text: 'Samoa' },
  { value: 'Bonaire, Saint Eustatius and Saba ', text: 'Bonaire, Saint Eustatius and Saba ' },
  { value: 'Brazil', text: 'Brazil' },
  { value: 'Bahamas', text: 'Bahamas' },
  { value: 'Jersey', text: 'Jersey' },
  { value: 'Belarus', text: 'Belarus' },
  { value: 'Belize', text: 'Belize' },
  { value: 'Russia', text: 'Russia' },
  { value: 'Rwanda', text: 'Rwanda' },
  { value: 'Serbia', text: 'Serbia' },
  { value: 'East Timor', text: 'East Timor' },
  { value: 'Reunion', text: 'Reunion' },
  { value: 'Turkmenistan', text: 'Turkmenistan' },
  { value: 'Tajikistan', text: 'Tajikistan' },
  { value: 'Romania', text: 'Romania' },
  { value: 'Tokelau', text: 'Tokelau' },
  { value: 'Guinea-Bissau', text: 'Guinea-Bissau' },
  { value: 'Guam', text: 'Guam' },
  { value: 'Guatemala', text: 'Guatemala' },
  {
    value: 'South Georgia and the South Sandwich Islands',
    text: 'South Georgia and the South Sandwich Islands',
  },
  { value: 'Greece', text: 'Greece' },
  { value: 'Equatorial Guinea', text: 'Equatorial Guinea' },
  { value: 'Guadeloupe', text: 'Guadeloupe' },
  { value: 'Japan', text: 'Japan' },
  { value: 'Guyana', text: 'Guyana' },
  { value: 'Guernsey', text: 'Guernsey' },
  { value: 'French Guiana', text: 'French Guiana' },
  { value: 'Georgia', text: 'Georgia' },
  { value: 'Grenada', text: 'Grenada' },
  { value: 'United Kingdom', text: 'United Kingdom' },
  { value: 'Gabon', text: 'Gabon' },
  { value: 'El Salvador', text: 'El Salvador' },
  { value: 'Guinea', text: 'Guinea' },
  { value: 'Gambia', text: 'Gambia' },
  { value: 'Greenland', text: 'Greenland' },
  { value: 'Gibraltar', text: 'Gibraltar' },
  { value: 'Ghana', text: 'Ghana' },
  { value: 'Oman', text: 'Oman' },
  { value: 'Tunisia', text: 'Tunisia' },
  { value: 'Jordan', text: 'Jordan' },
  { value: 'Croatia', text: 'Croatia' },
  { value: 'Haiti', text: 'Haiti' },
  { value: 'Hungary', text: 'Hungary' },
  { value: 'Hong Kong', text: 'Hong Kong' },
  { value: 'Honduras', text: 'Honduras' },
  { value: 'Heard Island and McDonald Islands', text: 'Heard Island and McDonald Islands' },
  { value: 'Venezuela', text: 'Venezuela' },
  { value: 'Puerto Rico', text: 'Puerto Rico' },
  { value: 'Palestinian Territory', text: 'Palestinian Territory' },
  { value: 'Palau', text: 'Palau' },
  { value: 'Portugal', text: 'Portugal' },
  { value: 'Svalbard and Jan Mayen', text: 'Svalbard and Jan Mayen' },
  { value: 'Paraguay', text: 'Paraguay' },
  { value: 'Iraq', text: 'Iraq' },
  { value: 'Panama', text: 'Panama' },
  { value: 'French Polynesia', text: 'French Polynesia' },
  { value: 'Papua New Guinea', text: 'Papua New Guinea' },
  { value: 'Peru', text: 'Peru' },
  { value: 'Pakistan', text: 'Pakistan' },
  { value: 'Philippines', text: 'Philippines' },
  { value: 'Pitcairn', text: 'Pitcairn' },
  { value: 'Poland', text: 'Poland' },
  { value: 'Saint Pierre and Miquelon', text: 'Saint Pierre and Miquelon' },
  { value: 'Zambia', text: 'Zambia' },
  { value: 'Western Sahara', text: 'Western Sahara' },
  { value: 'Estonia', text: 'Estonia' },
  { value: 'Egypt', text: 'Egypt' },
  { value: 'South Africa', text: 'South Africa' },
  { value: 'Ecuador', text: 'Ecuador' },
  { value: 'Italy', text: 'Italy' },
  { value: 'Vietnam', text: 'Vietnam' },
  { value: 'Solomon Islands', text: 'Solomon Islands' },
  { value: 'Ethiopia', text: 'Ethiopia' },
  { value: 'Somalia', text: 'Somalia' },
  { value: 'Zimbabwe', text: 'Zimbabwe' },
  { value: 'Saudi Arabia', text: 'Saudi Arabia' },
  { value: 'Spain', text: 'Spain' },
  { value: 'Eritrea', text: 'Eritrea' },
  { value: 'Montenegro', text: 'Montenegro' },
  { value: 'Moldova', text: 'Moldova' },
  { value: 'Madagascar', text: 'Madagascar' },
  { value: 'Saint Martin', text: 'Saint Martin' },
  { value: 'Morocco', text: 'Morocco' },
  { value: 'Monaco', text: 'Monaco' },
  { value: 'Uzbekistan', text: 'Uzbekistan' },
  { value: 'Myanmar', text: 'Myanmar' },
  { value: 'Mali', text: 'Mali' },
  { value: 'Macao', text: 'Macao' },
  { value: 'Mongolia', text: 'Mongolia' },
  { value: 'Marshall Islands', text: 'Marshall Islands' },
  { value: 'Macedonia', text: 'Macedonia' },
  { value: 'Mauritius', text: 'Mauritius' },
  { value: 'Malta', text: 'Malta' },
  { value: 'Malawi', text: 'Malawi' },
  { value: 'Maldives', text: 'Maldives' },
  { value: 'Martinique', text: 'Martinique' },
  { value: 'Northern Mariana Islands', text: 'Northern Mariana Islands' },
  { value: 'Montserrat', text: 'Montserrat' },
  { value: 'Mauritania', text: 'Mauritania' },
  { value: 'Isle of Man', text: 'Isle of Man' },
  { value: 'Uganda', text: 'Uganda' },
  { value: 'Tanzania', text: 'Tanzania' },
  { value: 'Malaysia', text: 'Malaysia' },
  { value: 'Mexico', text: 'Mexico' },
  { value: 'Israel', text: 'Israel' },
  { value: 'France', text: 'France' },
  { value: 'British Indian Ocean Territory', text: 'British Indian Ocean Territory' },
  { value: 'Saint Helena', text: 'Saint Helena' },
  { value: 'Finland', text: 'Finland' },
  { value: 'Fiji', text: 'Fiji' },
  { value: 'Falkland Islands', text: 'Falkland Islands' },
  { value: 'Micronesia', text: 'Micronesia' },
  { value: 'Faroe Islands', text: 'Faroe Islands' },
  { value: 'Nicaragua', text: 'Nicaragua' },
  { value: 'Netherlands', text: 'Netherlands' },
  { value: 'Norway', text: 'Norway' },
  { value: 'Namibia', text: 'Namibia' },
  { value: 'Vanuatu', text: 'Vanuatu' },
  { value: 'New Caledonia', text: 'New Caledonia' },
  { value: 'Niger', text: 'Niger' },
  { value: 'Norfolk Island', text: 'Norfolk Island' },
  { value: 'Nigeria', text: 'Nigeria' },
  { value: 'New Zealand', text: 'New Zealand' },
  { value: 'Nepal', text: 'Nepal' },
  { value: 'Nauru', text: 'Nauru' },
  { value: 'Niue', text: 'Niue' },
  { value: 'Cook Islands', text: 'Cook Islands' },
  { value: 'Kosovo', text: 'Kosovo' },
  { value: 'Ivory Coast', text: 'Ivory Coast' },
  { value: 'Switzerland', text: 'Switzerland' },
  { value: 'Colombia', text: 'Colombia' },
  { value: 'China', text: 'China' },
  { value: 'Cameroon', text: 'Cameroon' },
  { value: 'Chile', text: 'Chile' },
  { value: 'Cocos Islands', text: 'Cocos Islands' },
  { value: 'Canada', text: 'Canada' },
  { value: 'Republic of the Congo', text: 'Republic of the Congo' },
  { value: 'Central African Republic', text: 'Central African Republic' },
  { value: 'Democratic Republic of the Congo', text: 'Democratic Republic of the Congo' },
  { value: 'Czech Republic', text: 'Czech Republic' },
  { value: 'Cyprus', text: 'Cyprus' },
  { value: 'Christmas Island', text: 'Christmas Island' },
  { value: 'Costa Rica', text: 'Costa Rica' },
  { value: 'Curacao', text: 'Curacao' },
  { value: 'Cape Verde', text: 'Cape Verde' },
  { value: 'Cuba', text: 'Cuba' },
  { value: 'Swaziland', text: 'Swaziland' },
  { value: 'Syria', text: 'Syria' },
  { value: 'Sint Maarten', text: 'Sint Maarten' },
  { value: 'Kyrgyzstan', text: 'Kyrgyzstan' },
  { value: 'Kenya', text: 'Kenya' },
  { value: 'South Sudan', text: 'South Sudan' },
  { value: 'Suriname', text: 'Suriname' },
  { value: 'Kiribati', text: 'Kiribati' },
  { value: 'Cambodia', text: 'Cambodia' },
  { value: 'Saint Kitts and Nevis', text: 'Saint Kitts and Nevis' },
  { value: 'Comoros', text: 'Comoros' },
  { value: 'Sao Tome and Principe', text: 'Sao Tome and Principe' },
  { value: 'Slovakia', text: 'Slovakia' },
  { value: 'South Korea', text: 'South Korea' },
  { value: 'Slovenia', text: 'Slovenia' },
  { value: 'North Korea', text: 'North Korea' },
  { value: 'Kuwait', text: 'Kuwait' },
  { value: 'Senegal', text: 'Senegal' },
  { value: 'San Marino', text: 'San Marino' },
  { value: 'Sierra Leone', text: 'Sierra Leone' },
  { value: 'Seychelles', text: 'Seychelles' },
  { value: 'Kazakhstan', text: 'Kazakhstan' },
  { value: 'Cayman Islands', text: 'Cayman Islands' },
  { value: 'Singapore', text: 'Singapore' },
  { value: 'Sweden', text: 'Sweden' },
  { value: 'Sudan', text: 'Sudan' },
  { value: 'Dominican Republic', text: 'Dominican Republic' },
  { value: 'Dominica', text: 'Dominica' },
  { value: 'Djibouti', text: 'Djibouti' },
  { value: 'Denmark', text: 'Denmark' },
  { value: 'British Virgin Islands', text: 'British Virgin Islands' },
  { value: 'Germany', text: 'Germany' },
  { value: 'Yemen', text: 'Yemen' },
  { value: 'Algeria', text: 'Algeria' },
  { value: 'United States', text: 'United States' },
  { value: 'Uruguay', text: 'Uruguay' },
  { value: 'Mayotte', text: 'Mayotte' },
  { value: 'United States Minor Outlying Islands', text: 'United States Minor Outlying Islands' },
  { value: 'Lebanon', text: 'Lebanon' },
  { value: 'Saint Lucia', text: 'Saint Lucia' },
  { value: 'Laos', text: 'Laos' },
  { value: 'Tuvalu', text: 'Tuvalu' },
  { value: 'Taiwan', text: 'Taiwan' },
  { value: 'Trinidad and Tobago', text: 'Trinidad and Tobago' },
  { value: 'Turkey', text: 'Turkey' },
  { value: 'Sri Lanka', text: 'Sri Lanka' },
  { value: 'Liechtenstein', text: 'Liechtenstein' },
  { value: 'Latvia', text: 'Latvia' },
  { value: 'Tonga', text: 'Tonga' },
  { value: 'Lithuania', text: 'Lithuania' },
  { value: 'Luxembourg', text: 'Luxembourg' },
  { value: 'Liberia', text: 'Liberia' },
  { value: 'Lesotho', text: 'Lesotho' },
  { value: 'Thailand', text: 'Thailand' },
  { value: 'French Southern Territories', text: 'French Southern Territories' },
  { value: 'Togo', text: 'Togo' },
  { value: 'Chad', text: 'Chad' },
  { value: 'Turks and Caicos Islands', text: 'Turks and Caicos Islands' },
  { value: 'Libya', text: 'Libya' },
  { value: 'Vatican', text: 'Vatican' },
  { value: 'Saint Vincent and the Grenadines', text: 'Saint Vincent and the Grenadines' },
  { value: 'United Arab Emirates', text: 'United Arab Emirates' },
  { value: 'Andorra', text: 'Andorra' },
  { value: 'Antigua and Barbuda', text: 'Antigua and Barbuda' },
  { value: 'Afghanistan', text: 'Afghanistan' },
  { value: 'Anguilla', text: 'Anguilla' },
  { value: 'U.S. Virgin Islands', text: 'U.S. Virgin Islands' },
  { value: 'Iceland', text: 'Iceland' },
  { value: 'Iran', text: 'Iran' },
  { value: 'Armenia', text: 'Armenia' },
  { value: 'Albania', text: 'Albania' },
  { value: 'Angola', text: 'Angola' },
  { value: 'Antarctica', text: 'Antarctica' },
  { value: 'American Samoa', text: 'American Samoa' },
  { value: 'Argentina', text: 'Argentina' },
  { value: 'Australia', text: 'Australia' },
  { value: 'Austria', text: 'Austria' },
  { value: 'Aruba', text: 'Aruba' },
  { value: 'India', text: 'India' },
  { value: 'Aland Islands', text: 'Aland Islands' },
  { value: 'Azerbaijan', text: 'Azerbaijan' },
  { value: 'Ireland', text: 'Ireland' },
  { value: 'Indonesia', text: 'Indonesia' },
  { value: 'Ukraine', text: 'Ukraine' },
  { value: 'Qatar', text: 'Qatar' },
  { value: 'Mozambique', text: 'Mozambique' },
]

export default countryList
