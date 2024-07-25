import React from 'react';
import FeatureList from '@components/product/feature-list';
import { HouseProps } from "@types";

export function ProductDetails({ product }: { product: HouseProps }) {
 
    const featureData = [
        { label: 'Loại hình', value: product.property_type },
        
        { label: 'Area (sqm)', value: product.attr_area },
        { label: 'Floor', value: product.attr_floor ?? 'N/A' },
        { label: 'Type Detail', value: product.attr_type_detail },
        

        { label: 'Chiều ngang (m)', value: product.attr_width ?? 'N/A' },
        { label: 'Chiều dài (m)', value: product.attr_length ?? 'N/A' },


        { label: 'Số phòng', value: product.attr_total_room ?? 'N/A' },
        { label: 'Số PN', value: product.attr_bathroom ?? 'N/A' },

        { label: 'Đường', value: product.location_street },

        { label: 'Vĩ độ', value: product.location_lat },
        { label: 'Kinh độ', value: product.location_long },

    ];

    return (
        <div className="p-6">
            <FeatureList features={featureData} />
        </div>
    );
};


