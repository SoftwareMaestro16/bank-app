import { Text } from 'react-native';
import '../global.css';

export function Line({ children, className, style, ...props }) {

    return (
        <Text
            className={`${className} text-white font-medium`} 
            {...props}
        >
            {children}
        </Text>
    );
}