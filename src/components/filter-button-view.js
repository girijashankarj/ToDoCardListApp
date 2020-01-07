import React from 'react';
import {map , isEmpty} from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Select} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

function FilterButtonView (oProps){
    const classes = useStyles();
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    const [state, setState] = React.useState({
      id: oProps.id,
      value: oProps.value,
    });
    React.useEffect(() => {
      setLabelWidth(inputLabel.current.offsetWidth);
    }, []);
  
    const handleValueChange = id => event => {
      let oFilterChange = {
         id : id,
         value: event.target.value,
      }
      setState(oFilterChange);
      oProps.handleFilterAction(oFilterChange);
    };

    return (
        <FormControl variant="outlined" className={classes.formControl+" "+oProps.id}>
            <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                {oProps.label}
            </InputLabel>
            <Select
                native
                value={state.value}
                onChange={handleValueChange(oProps.id)}
                labelWidth={labelWidth}
                inputProps={{
                    name: 'id',
                    id: 'outlined-age-native-simple',
                }}
            >
            {isEmpty(oProps.options) ? null : 
              map(oProps.options, (sOption) => {return <option value={sOption}>{sOption}</option>})
            }
            </Select>
        </FormControl>
    );
}

export default FilterButtonView;