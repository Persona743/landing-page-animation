import {
    ComposableMap,
    Geographies,
    Geography,
    Annotation,
    ZoomableGroup,
} from 'react-simple-maps';

const Map = () => {
    return (
        <ComposableMap
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
                rotate: [-43.0, -30.0, 0],
                center: [5, 3],
                scale: 1000,
            }}
            style={{ width: '100%', height: '100%' }}
        >
            <Geographies
                geography="/features.json"
                fill="#2c065d"
                stroke="#FFFFFF"
                strokeWidth={0.7}
            >
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} />
                    ))
                }
            </Geographies>
            <Annotation
                subject={[51.72, 35.33]}
                dx={-90}
                dy={-30}
                connectorProps={{
                    stroke: 'white',
                    strokeWidth: 3,
                    strokeLinecap: 'round',
                }}
            >
                <text
                    x="-8"
                    textAnchor="end"
                    alignmentBaseline="up"
                    fill="white"
                    fontSize={22}
                >
                    {'Tehran'}
                </text>
            </Annotation>
            <Annotation
                subject={[55.82, 25.57]}
                dx={-90}
                dy={-30}
                connectorProps={{
                    stroke: 'white',
                    strokeWidth: 3,
                    strokeLinecap: 'round',
                }}
            >
                <text
                    x="-8"
                    textAnchor="end"
                    alignmentBaseline="middle"
                    fill="white"
                    fontSize={22}
                >
                    {'Dubai'}
                </text>
            </Annotation>
        </ComposableMap>
    );
};

export default Map;
