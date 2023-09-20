import { Button as BootstrapButton } from "react-bootstrap";

export default function Butdton(props) {
    const { children, ...rest } = props;
    return (
        <BootstrapButton {...rest}>{children}</BootstrapButton>
    )
}
