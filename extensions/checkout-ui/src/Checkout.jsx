import '@shopify/ui-extensions/preact';
import {render} from 'preact';
import {useState, useEffect} from 'preact/hooks';

export default async function ExtensionRender() {
  render(<Extension />, document.body);
}

function Extension() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const unsubscribe = shopify.buyerJourney.intercept(({canBlockProgress}) => {
      console.log('canBlockProgress:', canBlockProgress, 'checked:', checked)
      if (!canBlockProgress) {
        return {
          behavior: "allow",
        };
      }

      if (!checked) {
        console.log('blocking progress')
        return {
          behavior: 'block',
          reason: 'Please check the box before payment.',
        };
      }
      console.log('allowing progress')
      return {behavior: 'allow'};
    });

    return () => unsubscribe.then((unsubscribeFn) => unsubscribeFn());
  }, [checked]);

  return (
    <s-stack gap='base'>
      <s-checkbox label={!checked ? "Please agree before proceeding." : "I agree before payment"} checked={checked} onChange={() => setChecked(!checked)}></s-checkbox>
    </s-stack>
  );
}
