<div align="center">
    <img src="./media/DotLib.svg" width="100rem"/>
    <h3>dotnote</h3>
    <p>Component Libary built for Next.js</p>
</div>

## About
dotnote is a simple component libary for react, some components are based on Windows 11.

## Examples
### Account Options & Change Password Modal
Here, we'll be making a change account password page, similar to the "Change PIN" in Windows 11.
![Change PIN in Windows 11](/media/Windows11ChangePIN.png)
<div align="center">
<i>Change PIN in Windows 11</i>
</div>
<br/>

```js
//Show this before return(<></>)
const [IsOpen, SetOpen] = useState(false);
```
```html
<>
    <Item doesExpand>
    <ItemTitle>Account Settings</ItemTitle>
        <ItemExpansion>
            <ChildItem type="Button">
                Change Password
            </ChildItem>
        </ItemExpansion>
    </Item>
    <Modal>
        <ModalTitle Icon="/Shield.svg">
            Change your Password
        </ModalTitle>
        <ModalBody>
            <InputLabel HtmlFor="old_password">Old Password</InputLabel>
            <Input
                HtmlFor="old_password"
                Id="old_password"
            />
            <InputLabel HtmlFor="new_password">New Password</InputLabel>
            <Input
                HtmlFor="new_password"
                Id="new_password"
            />
        </ModalBody>
        <ModalButtons>
            <Button Style="Primary">
                Confirm
            </Button>
            <Button Style="Secondary">
                Cancel
            </Button>
        </ModalButtons>
    </Modal>
</>
```