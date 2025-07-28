import '../../scss/skeleton.scss';

export default function Skeleton({ type = 'projects', count = 3 }) {
    const renderSkeletonItems = () => {
        const items = [];
        
        for (let i = 0; i < count; i++) {
            switch (type) {
                case 'projects':
                    items.push(
                        <div key={i} className="skeleton-block skeleton-project">
                            <div className="skeleton-thumbnail"></div>
                            <div className="skeleton-content">
                                <div className="skeleton-title"></div>
                                <div className="skeleton-description">
                                    <div className="skeleton-line"></div>
                                    <div className="skeleton-line"></div>
                                    <div className="skeleton-line short"></div>
                                </div>
                            </div>
                            <div className="skeleton-buttons">
                                <div className="skeleton-button"></div>
                                <div className="skeleton-button download"></div>
                            </div>
                        </div>
                    );
                    break;
                    
                case 'certificates':
                    items.push(
                        <div key={i} className="skeleton-block skeleton-certificate">
                            <div className="skeleton-image"></div>
                        </div>
                    );
                    break;
                    
                case 'techStack':
                    items.push(
                        <div key={i} className="skeleton-block skeleton-tech">
                            <div className="skeleton-icon"></div>
                            <div className="skeleton-text"></div>
                        </div>
                    );
                    break;
                    
                default:
                    break;
            }
        }
        
        return items;
    };

    return (
        <div className={`skeleton-container skeleton-${type}`}>
            {renderSkeletonItems()}
        </div>
    );
} 