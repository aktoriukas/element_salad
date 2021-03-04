# Element_sald

Collection of React components.
Elements are build using 'styled-components' . It comes with styling and functionality can be passed very easily.
To Have complete access and modification possibilities, download this repo and use each element separately.

all elements are in: 

### `src/Elements`

To view components visit : [Kratinys](https://aktoriukas.com/kratinys/)

## To install using NPM

### `npm i aktoriukas-react-components `

 Here's an example of basic usage: 
 
 ```js
	import styled, { ThemeProvider } from 'styled-components';
	import { button, list } from 'aktoriukas-react-components'

	export default function MyApp() {

	const theme = {
		mainColor: '#535353',
		secondColor: '#A0A0A0',
		activeColor: '#ffffff57',
		txtColor: '#ffffff',
		fontSize: '1.4rem',
		fontFamily: 'monospace',
		fontFamily2: 'sans-serif',
		backgroundColor: '#8787ab'
   	 }
   	     const exaplList =
        [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Aenean tincidunt elit at ipsum cursus, vitae interdum nulla suscipit.',
            'Curabitur in orci vel risus facilisis accumsan.',
            'Morbi eleifend tortor lacinia sapien sagittis, quis pellentesque felis egestas.',
            'Aenean viverra dui quis leo lacinia fringilla.',
            'Sed varius lectus ac condimentum egestas.'
        ]

   	 
   	 const { Zoom } = button;
   	 const { Cards } = list;

  	return (
		 <ThemeProvider theme={theme}>

			<Zoom txt='Hover me' />
			
			<Cards list={exapleList} />
		  
		</ThemeProvider>

  	);
}
```

ThemeProvider is not essential, but highly recommended.

Priority is given to props, then followed by theme and default value.

##Props

#Button

| prop | about |
|-------|--------|
| fontFamily | font family name |
| fontSize |  in px  |
| mainColor |  any tipe of color  |
| secondColor | any tipe of color    |
| txtColor | any tipe of color    |
| activeColor | any tipe of color    |
| txt |  string  |


#List

| prop | about |
|-------|--------|
| fontFamily | font family name |
| fontSize |  in px  |
| mainColor |  any tipe of color  |
| secondColor | any tipe of color    |
| txtColor | any tipe of color    |
| activeColor | any tipe of color    |
| list |  array  |



