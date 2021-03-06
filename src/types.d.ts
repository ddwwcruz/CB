export interface RanchInfo {
	ranchName: string
	ranchOwner: string
	phone: string
	address: string
	city: string
	state: string
	zip: string
	premisesId: string
	taxExempt: string
	timber: string
	email: string
	website: string
	ranchType: number
}

export interface Bull {
	id?: number
	active: number
	name: string
	regNum: string
	dateOfBirth: string
	birthWeight: number
	breed: string
	color: string
	specialMarkings: string
	importExport: string
	earTag: string
	earTagLoc: string
	brandNum: string
	brandNumLoc: string
	tattoo: string
	tattooLoc: string
	electronicId: string
	electronicIdLoc: string
	otherId: string
	otherIdLoc: string
	metalId: string
	metalIdLoc: string
	genetic: string
	bloodline: string
	siblingCode: string
	cloned: string
	showAnimal: boolean
	aiBull: boolean
	reference: boolean
	hornStatus: string
	origin: string
	imagePath: string
	pasture: string
	pen: string
	currBullOwner: string
	bullSire: string
	bullDame: string
	comments: string
	purchaseFrom: string
	purchaseDate: string
	price: number
	breeder: string
}

export interface Cow {
	id?: number
	active: number
	name: string
	regNum: string
	dateOfBirth: string
	birthWeight: number
	breed: string
	color: string
	specialMarkings: string
	importExport: string
	earTag: string
	earTagLoc: string
	brandNum: string
	brandNumLoc: string
	tattoo: string
	tattooLoc: string
	electronicId: string
	electronicIdLoc: string
	otherId: string
	otherIdLoc: string
	metalId: string
	metalIdLoc: string
	genetic: string
	bloodline: string
	siblingCode: string
	cloned: string
	showAnimal: boolean
	aiCow: boolean
	reference: boolean
	hornStatus: string
	origin: string
	imagePath: string
	pasture: string
	pen: string
	currCowOwner: string
	cowSire: string
	cowDame: string
	comments: string
	purchaseFrom: string
	purchaseDate: string
	price: number
	breeder: string
}

export interface BullMortality {
	bullId?: number
	dateOfDeath: string
	causeOfDeath: string
	location: string
	symptoms: string
	policy: string
	insured: string
	insurance: string
	policyNum: string
	phone: string
	coverageDate: string
	coverageAmount: number
	ratePercentage: number
	premium: number
	term: number
	autopsy: string
	results: string
	resultsUploaded: string
	veterinarian: string
	vetFee: number
	date: string
	mortalityComments: string
	carvassType: string
	killDate: string
	killComment: string
	processingFacility: string
	feederWeight: number
	liveWeight: number
	carcassWeight: number
	ribeyeArea: string
	ribeyeAreaCWT: string
	fatThickness: string
	intramascularFat: string
	marbling: string
	frameScore: string
	maturity: string
	qualityGrade: string
	yieldGrade: string
	penLot: string
	tenderness: string
	carcassValue: string
	dressingPercentage: string
	reportNum: string
	carcassNum: string
	lotNum: string
	daysOnFeed: string
	carcassComments: string
}

export interface CowMortality {
	bullId?: number
	dateOfDeath: string
	causeOfDeath: string
	location: string
	symptoms: string
	policy: string
	insured: string
	insurance: string
	policyNum: string
	phone: string
	coverageDate: string
	coverageAmount: number
	ratePercentage: number
	premium: number
	term: number
	autopsy: string
	results: string
	resultsUploaded: string
	veterinarian: string
	vetFee: number
	date: string
	mortalityComments: string
	carvassType: string
	killDate: string
	killComment: string
	processingFacility: string
	feederWeight: number
	liveWeight: number
	carcassWeight: number
	ribeyeArea: string
	ribeyeAreaCWT: string
	fatThickness: string
	intramascularFat: string
	marbling: string
	frameScore: string
	maturity: string
	qualityGrade: string
	yieldGrade: string
	penLot: string
	tenderness: string
	carcassValue: string
	dressingPercentage: string
	reportNum: string
	carcassNum: string
	lotNum: string
	daysOnFeed: string
	carcassComments: string
}
