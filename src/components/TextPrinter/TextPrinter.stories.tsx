import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { TextPrinter } from './index'
import {withInfo} from "@storybook/addon-info";

const stories = storiesOf("Components", module);

stories.addDecorator(withInfo);
stories.addParameters({ info: { inline: true } });

stories.add('TextPrinter', () => {
    return (
        <div className={'controller'}>
            <br/>
            <TextPrinter size={"big"}>
                Button
            </TextPrinter>
            <br/>
            <TextPrinter size={"small"}>
                Button
            </TextPrinter>
        </div>
    );
});
