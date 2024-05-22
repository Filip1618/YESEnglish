import note from "@assets/note.svg";
import exam from "@assets/exam.svg";
import eight from "@assets/eight.svg";
import exam2 from "@assets/exam2.svg";
import graduationCap from "@assets/graduationCap.svg";

const contentOverview: TContentCourses[] = [
	{
		image: note,
		imageSource: "COLLECTION: Grommet Interface Icons, AUTHOR: grommet",
		headerText: "Kursy Standardowe",
		mainText: `Są to kursy skierowane do dzieci i młodzieży w wieku szkolnym, na których Kursanci nabywają nowe umiejętności językowe w sposób systematyczny, a zagadnienia i tematyka zajęć dostosowane są do rozwoju intelektualnego i emocjonalnego uczniów. Zajęcia odbywają się 2 razy w tygodniu i trwają 60 min (rocznie 66 lekcji).`,
		list: [
			"utrwali i poszerzy słownictwo",
			"przećwiczy wymagane zagadnienia gramatyczne oraz funkcje językowe",
			"zapozna się ze standardami egzaminacyjnymi, typowymi zadaniami",
			"otrzyma wskazówki pomocne w rozwiązywaniu różnych typów zadań",
			"zautomatyzuje udzielanie odpowiedzi na różnego rodzaju zadania egzaminacyjne.",
		],
	},

	{
		image: exam,
		imageSource: "COLLECTION: School Lin Icons, AUTHOR: SVG Repo",
		headerText: "Kursy “Pod egzamin”",
		mainText: `Kursy „pod egzamin” skierowane są do osób przygotowujących się do egzaminów. Na kursach
        „pod egzamin”, młodzież:`,
		// list: [
		//     "utrwali i poszerzy słownictwo w obszarze objętym wymaganiami egzaminacyjnymi",
		//     "przećwiczy wymagane zagadnienia gramatyczne oraz funkcje językowe",
		//     "zapozna się ze standardami egzaminacyjnymi, typowymi zadaniami",
		//     "otrzyma wskazówki pomocne w rozwiązywaniu różnych typów zadań",
		//     "zautomatyzuje udzielanie odpowiedzi na różnego rodzaju zadania egzaminacyjne",
		// ],
	},
	{
		image: eight,
		imageSource: "COLLECTION: Emblem Interface Icons, AUTHOR: emblemicons",
		headerText: "Kurs do egzaminu ósmoklasisty",
		mainText: `Jest to roczny intensywny kurs skierowany do uczniów
        klasy ósmej szkoły podstawowej przygotowujących się do egzaminu ósmoklasisty.
        Zajęcia odbywają się 2 razy w tygodniu i trwają 60 minut (rocznie 56 lekcji). Kurs trwa
        od połowy września do końca maja.
`,
	},
	{
		image: exam2,
		imageSource: "COLLECTION: Real Assets 19, AUTHOR: SVG Repo",
		headerText: "Kurs do matury",
		mainText: `Jest to roczny intensywny kurs skierowany do licealistów
        przygotowujących się do egzaminu maturalnego na poziomie podstawowym i
        rozszerzonym. Zajęcia odbywają się 2 razy w tygodniu i trwają 90 minut (rocznie 56
        lekcji). Kurs trwa od połowy września do końca maja.
`,
	},
	{
		image: graduationCap,
		imageSource: "COLLECTION: Dazzle Line Icons, AUTHOR: Dazzle UI",
		headerText: "Kurs do First Certificate In English (FCE)",
		mainText: `Jest to 2letni kurs skierowany do osób
        przygotowujących się do egzaminu FCE. Zajęcia odbywają się 2 razy w tygodniu i trwają
        90 minut (łącznie 120 spotkań). Kurs trwa od połowy września do połowy czerwca.
`,
	},
	{
		image: graduationCap,
		imageSource: "COLLECTION: Dazzle Line Icons, AUTHOR: Dazzle UI",
		headerText: "Kurs do FCE for Schools (FCEfS)",
		mainText: `Jest to kurs skierowany do młodzieży
        przygotowującej się do egzaminu FCE for Schools, która
        rozpoczęła przygodę uczenia się z YES jeszcze w szkole podstawowej i nieprzerwanie ją
        kontynuowała. Zajęcia odbywają się 2 razy w tygodniu i trwają 90 minut (łącznie 120
        spotkań).

`,
	},
];

export default contentOverview;
