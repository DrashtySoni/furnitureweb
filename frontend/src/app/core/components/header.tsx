import HamburgerIcon from '~/assets/hamburgerIcon.svg';
import SearchIcon from '~/assets/searchIcon.svg';
import UserIcon from '~/assets/userIcon.svg';
import BasketIcon from '~/assets/basketIcon.svg';
import { Link } from '@remix-run/react';
import { useSuperFast } from 'src/lib/superfast/SuperFastProvider/Provider';

export const Header: React.FC<{ navigation: any }> = ({ navigation }) => {
    const { state: superFast } = useSuperFast();
    return (
        <div className="flex flex-auto items-center justify-between mb-5 w-full">
            <div className="flex flex-auto justify-between items-center">
                <img src={`${HamburgerIcon}`} />
                <Link to="/">
                    <img src={superFast.config.logo} style={{ width: '200px' }} />
                </Link>
                <div className="bg-grey w-60 p-2">
                    <img src={`${SearchIcon}`} />
                </div>
                {navigation.tree.children.map((child: any) => (
                    <p key={child.path}>
                        <Link to={child.path}>{child.name}</Link>
                    </p>
                ))}
            </div>
            <div className="flex flex-auto items-center justify-end gap-5">
                <img src={`${UserIcon}`} />
                <Link to="/cart">
                    <img src={`${BasketIcon}`} />
                </Link>
            </div>
        </div>
    );
};
