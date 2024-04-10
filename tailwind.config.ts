import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
     fontFamily: {
      syne: ['Syne', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
    screens: {
      '2xl': {'min': '1535px'},
      'xl': {'min': '1279px'},
      'lg': {'min': '1323px'},
      'md': {'min': '767px', 'max': '1100px'},
      'sm': {'min': '340px','max': '500px'},
    },
    extend: {
      gridTemplateColumns: {
        "2.5": "1.25fr 1fr"
      },
      colors: {
        "--yellow": "#d0b20b",
        "--purple": "#400578",
      },
      fontFamily: {
        "AdventPro": ['Advent Pro', "sans-serif"],   // top picks for site
        "AbrilFatface": ["Abril Fatface", "sans-serif"], // top picks for site
        "Afacad": ["Afacad", "sans-serif"], // top picks for site
        "AlegreyaSans" : ['Alegreya Sans', "sans-serif"],
        "Anton": ['Anton', 'sans-serif'],
        "BebasNeue": ['Bebas Neue', 'sans-serif'],
        "Belanosima": ['Belanosima', 'sans-serif'],
        "BodoniModa": ['Bodoni Moda', 'serif'], // top picks for site
        "BubbleGum": ['Bubblegum Sans', 'cursive'],
        "DarkerGrotesque": ['Darker Grotesque', 'sans-serif'], // top picks for site
        "EbGaramond": ["EB Garamond", "serif"], // top picks for site
        "ElMessiri": ['El Messiri', 'sans-serif'],
        "Fahkwang": ['Fahkwang', "sans-serif"],
        "Inter": ['Inter', 'sans-serif'], // top picks for site
        "Jost": ['Jost', 'sans-serif'],
        "JuliusSansOne": ['Julius Sans One', "sans-serif"], // top picks for site
        "Kalam": ['Kalam', 'cursive'],
        "Kodchasan": ['Kodchasan', 'sans-serif'],
        "MajorMonoDisplay": ['Major Mono Display', 'monospace'],
        "Manrope": ['Manrope', 'sans-serif'],
        "Megrim": ["Megrim"],
        "Montserrat": ["Montserrat Subrayada", "sans-serif"],
        "MontserratAlternates" : ['Montserrat Alternates', "sans-serif"],
        "NanumMyeongjo": ["Nanum Myeongjo", "serif"], // top picks for site
        "NotoSerifDisplay": ["Noto Serif Display", "serif"],
        "Oswald": ['Oswald', 'sans-serif'],
        "OpenSans": ["Open Sans", "sans-serif"], // top picks for site
        "PermanentMarker": ['Permanent Marker', 'cursive'],
        "PetitFormal": ['Petit Formal Script', 'cursive'],
        "Philosopher" : ['Philosopher', "sans-serif"],
        "PinyonScript": ["Pinyon Script", "cursive"], // top picks for site
        "PlayfairDisplay": ["Playfair Display", "serif"], // top picks for site
        "MrsSaintDelafield": ["Mrs Saint Delafield", "cursive"], // top picks for site
        "PoiretOne": ["Poiret One", "sans-serif"], // top picks for site
        "PressStart2P": ["Press Start 2P", "cursive"],
        "Quicksand": ['Quicksand', 'sans-serif'],
        "ReemKufi": ['Reem Kufi', 'sans-serif'],
        "RubikMonoOne": ["Rubik Mono One", "sans-serif"],
        "RubikVinyl": ['Rubik Vinyl', 'cursive'],
        "Syncopate": ['Syncopate', 'sans-serif'],
        "Syne": ['Syne', 'sans-serif'],
        "TenorSans": ['Tenor Sans', 'sans-serif'],
        "Thasadith" : ['Thasadith', "sans-serif"],
        "Unbounded": ['Unbounded', 'sans-serif'],
        "WorkSans": ['Work Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require( 'tailwindcss' ),
		require( 'autoprefixer' )
  ],
};
export default config;
