import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
export default function SkeletonLoader({ isLoading, children }) {

    return (
        <div>
            {isLoading ? <SkeletonTheme baseColor="#f0f0f0" highlightColor="#e0e0e0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                    {Array.from({ length: 9 }).map((_, index) => (
                        <Skeleton key={index} height={200} />
                    ))}
                </div>
            </SkeletonTheme> : children}
        </div>
    )
}
