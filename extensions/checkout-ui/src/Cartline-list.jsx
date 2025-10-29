import '@shopify/ui-extensions/preact';
import { render } from 'preact';
import { useState } from 'preact/hooks';

export default async function ExtensionRender() {
    render(<Extension />, document.body);
}

function Extension() {
    let variant = shopify.lines.value;
    const [isShowDetail, setShowDetail] = useState(false);

    console.log('===>', isShowDetail)

    return (
        <s-stack gap='base'>
            <s-button onClick={() => setShowDetail(!isShowDetail)}>
                {!isShowDetail ? 'Open Detail' : 'Close Detail'}
            </s-button>
            {
                isShowDetail ? (
                    variant.length > 0 ? (
                        variant.map((val, index) => <s-stack key={index}>
                            <s-image src={val.merchandise.image.url} alt={val.merchandise.image.altText} inlineSize="auto" borderRadius='large' loading='eager' />
                            <s-text>{`${val.merchandise.product.productType}: ${val.quantity}`}</s-text>
                        </s-stack>)
                    ) : (
                    <s-text>Add a free gift to my order</s-text>
                    )
                )
                : null
            }
        </s-stack>
    );
}
