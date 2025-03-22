"use client";

import { GoogleMap, Marker, useJsApiLoader, InfoWindow } from "@react-google-maps/api";
import { useState } from "react";

const containerStyle = {
    width: "100%",
    height: "400px",
    marginTop: "55px",
};

export default function Map({ properties }: { properties: any[] }) {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    });

    const [selectedProperty, setSelectedProperty] = useState<any | null>(null);

    if (!isLoaded) return <div>Loading Map...</div>;

    // Convert lat/long to numbers
    const formattedProperties = properties.map(property => ({
        ...property,
        lat: parseFloat(property.lat),
        long: parseFloat(property.long),
    }));

    // Set default center based on the first property
    const defaultCenter = formattedProperties.length > 0
        ? { lat: formattedProperties[0].lat, lng: formattedProperties[0].long }
        : { lat: 17.385, lng: 78.4867 }; // Default to Hyderabad if no properties

    return (
        <GoogleMap mapContainerStyle={containerStyle} center={defaultCenter} zoom={10}>
            {formattedProperties.map((property) => (
                <Marker
                    key={property.id}
                    position={{ lat: property.lat, lng: property.long }}
                    onClick={() => setSelectedProperty(property)}
                />
            ))}

            {/* Info Window on Marker Click */}
            {selectedProperty && (
                <InfoWindow
                    position={{ lat: selectedProperty.lat, lng: selectedProperty.long }}
                    onCloseClick={() => setSelectedProperty(null)}
                >
                    <div className="p-2 dark:bg-gray-600">
                        <h3 className="font-semibold text-lg">Property ID: {selectedProperty.id}</h3>
                        <p className="text-sm"><strong>Land Size:</strong> {selectedProperty.total_land_size} acres</p>
                        <p className="text-sm"><strong>Price per Acre:</strong> ₹{selectedProperty.land_price.price_per_acre_crore.lakh} Lakh</p>
                        <p className="text-sm"><strong>Total Price:</strong> ₹{selectedProperty.total_price} Lakh</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            <strong>Location:</strong> {selectedProperty.division_slugs.village},
                            {selectedProperty.division_slugs.mandal},
                            {selectedProperty.division_slugs.district},
                            {selectedProperty.division_slugs.state}
                        </p>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
}
