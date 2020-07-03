import React from 'react';
import usePureQueryCustomState from 'use-pure-query-state'

function DemoB () {
	const [inputString, setInpputString] = usePureQueryCustomState('sameListener', '')

	return (
		<input onChange={(e) => setInpputString(e.target.value)} value={inputString} />
	)
}

function DemoA () {
	const [inputString, setInpputString] = usePureQueryCustomState('sameListener', '')

	return (
		<input onChange={(e) => setInpputString(e.target.value)} value={inputString} />
	)
}

function App () {
	const [inputString, setInpputString] = usePureQueryCustomState('inputString', '')
	const [inputNumber, setInputNumber] = usePureQueryCustomState('inputNumber', 100)
	const [inputObject, setInputObject] = usePureQueryCustomState('inputObject', {vehicle: false, bike: false}, {isValueObj: true})

	return (
		<div>
			<h3>
				Single string
			</h3>
			<input onChange={(e) => setInpputString(e.target.value)} value={inputString} />
			<hr />
			<h3>
				Single number
			</h3>
			<input type="number" onChange={(e) => setInputNumber(e.target.value)} value={inputNumber} />
			<hr />
			<h3>
				Object
			</h3>
			<input type="checkbox" onChange={(e) => setInputObject({...inputObject, vehicle: e.target.checked})} checked={inputObject.vehicle} />
			<label> I have a vehicle</label>
			<input type="checkbox" onChange={(e) => setInputObject({...inputObject, bike: e.target.checked})} checked={inputObject.bike} />
			<label> I have a bike</label>
			<hr />
			<h3>
				Listening on same query
			</h3>
			<DemoA />
			<br />
			<DemoB />
		</div>
	);
}

export default App;
