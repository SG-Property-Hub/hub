import React from 'react';
import FeatureList from '@components/product/feature-list';
import { HouseProps } from "@types";

export function ProductDetails({ product }: { product: HouseProps }) {
 
    const featureData = [
        { label: 'Feature', value: product.attr_feature },
        { label: 'Total Rooms', value: product.attr_total_room ?? 'N/A' },
        { label: 'Area (sqm)', value: product.attr_area },
        { label: 'Floor', value: product.attr_floor ?? 'N/A' },
        { label: 'Type Detail', value: product.attr_type_detail },
        { label: 'Bathrooms', value: product.attr_bathroom ?? 'N/A' },
        { label: 'Floor Number', value: product.attr_floor_num ?? 'N/A' },
        { label: 'Width (m)', value: product.attr_width ?? 'N/A' },
        { label: 'Street', value: product.location_street },
        { label: 'Latitude', value: product.location_lat },
        { label: 'Longitude', value: product.location_long },
        { label: 'Last Updated', value: new Date(product.update_at).toLocaleDateString() },
        { label: 'Initial Date', value: new Date(product.initial_date).toLocaleDateString() },
        { label: 'Price Currency', value: product.price_currency }
    ];

    return (
        <div className="p-6">
            <FeatureList features={featureData} />
        </div>
    );
};


