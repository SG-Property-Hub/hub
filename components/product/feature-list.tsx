export interface Feature {
    label: string;
    value: string | number | null;
}

import React from 'react';

interface FeatureListProps {
    features: Feature[];
}

const FeatureList: React.FC<FeatureListProps> = ({ features }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {features.map((feature, index: number) => (
                <div key={index} className="p-4 border rounded-lg shadow-md bg-white">
                    <h4 className="text-lg font-semibold mb-2 text-gray-800">{feature.label}</h4>
                    <p className="text-gray-600">{feature.value ?? '--'}</p>
                </div>
            ))}
        </div>
    );
};

export default FeatureList;
