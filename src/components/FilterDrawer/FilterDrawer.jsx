import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import GearTags from '../GearTags/GearTags';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function FilterDrawer() {
  const dispatch = useDispatch();

  const flex = GearTags[0];
  const snowboardStyle = GearTags[1];
  const skiStyle = GearTags[2];
  const shape = GearTags[3];
  const profile = GearTags[4];
  const condition = GearTags[6];
  const lacing_system = GearTags[7];
  const size = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const [isOpen, setIsOpen] = useState(false);

  const [category, setCategory] = useState('');
  const [snowboardStyleSearch, setSnowboardStyleSearch] = useState('');
  const [conditionSearch, setConditionSearch] = useState('');
  const [skiStyleSearch, setSkiStyleSearch] = useState('');
  const [profileSearch, setProfileSearch] = useState('');
  const [flexSearch, setFlexSearch] = useState('');
  const [shapeSearch, setShapeSearch] = useState('');
  const [gender, setGender] = useState('');
  const [lacingSystemSearch, setLacingSystemSearch] = useState('');
  const [sizeSearch, setSizeSearch] = useState('');

  const [searchObj, setSearchObj] = useState({});

  const whatToFilterFor = (event) => {

  };

  // Updates the object that will be used to filter the items displayed
  const updateSearchObj = (key, value) => {
    setSearchObj({ ...searchObj, [key]: value });
  };

  // These functions will call the update function and set the select values.
  const catSelected = (cat) => {
    // This well remove the category_name from the object if '' is selected
    if (cat === '') {
      delete searchObj['category_name'];
      setConditionSearch(cat);
      setSearchObj({ ...searchObj });
    } else {
      setCategory(cat);
      setSearchObj({ category_name: cat });
    }
  };

  const conditionSelected = (con) => {
    if (con === '') {
      // This well remove the condition from the object if '' is selected
      delete searchObj['condition'];
      setConditionSearch(con);
      setSearchObj({ ...searchObj });
    } else {
      setConditionSearch(con);
      updateSearchObj('condition', con);
    }
  };

  const genderSelected = (gen) => {
    if (gen === '') {
      // This well remove the gender from the object if '' is selected
      delete searchObj['gender'];
      setGender(gen);
      setSearchObj({ ...searchObj });
    } else {
      setGender(gen);
      updateSearchObj('gender', gen);
    }
  };

  // These do not need to be removed as they will only be shown depending on what cat is selected.
  const snowboardStyleSelected = (board) => {
    setSnowboardStyleSearch(board);
    updateSearchObj('style', board);
  };

  const skiStyleSelected = (ski) => {
    setSkiStyleSearch(ski);
    updateSearchObj('style', ski);
  };

  const profileSelected = (profile) => {
    setProfileSearch(profile);
    updateSearchObj('profile', profile);
  };

  const lacingSystemSelected = (ski) => {
    setLacingSystemSearch(ski);
    updateSearchObj('lacing_system', ski);
  };

  const flexSelected = (flex) => {
    setFlexSearch(flex);
    updateSearchObj('flex', flex);
  };

  const sizeSelected = (size) => {
    setSizeSearch(size);
    updateSearchObj('size', size);
  };

  // When apply is clicked it sends over the object to be filtered against.
  const applyFilter = () => {

    dispatch({ type: 'SET_FILTER_OBJECT', payload: searchObj });
  };

  // clears all select lists and resets the searchObj
  const clearFilter = () => {
    setSearchObj({});
    dispatch({ type: 'SET_FILTER_OBJECT', payload: {} });

    setCategory('');
    setSnowboardStyleSearch('');
    setConditionSearch('');
    setSkiStyleSearch('');
    setProfileSearch('');
    setFlexSearch('');
    setShapeSearch('');
    setGender('');
    setLacingSystemSearch('');
    setSizeSearch('');
  };

  
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // filter list dropdown
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onChange={(event) => whatToFilterFor(event.target.value)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className="filterSelect">
          <div>
            <label>Category: </label>
            <select
              name="cat"
              id=""
              value={category}
              onChange={(event) => {
                catSelected(event.target.value);
              }}
            >
              <option value="">Select Category</option>
              <option value="snowboard">Snowboard</option>
              <option value="snowboard_boots">Snowboard Boots</option>
              <option value="snowboard_bindings">Snowboard Bindings</option>
              <option value="ski">Ski</option>
              <option value="ski_boots">Ski Boots</option>
              <option value="ski_bindings">Ski Bindings</option>
              <option value="helmet">Helmet</option>
              <option value="apparel">Apparel</option>
            </select>
          </div>
          {/* condition section */}
          <div>
            <label>Condition: </label>
            <select
              name="condition"
              id=""
              value={conditionSearch}
              onChange={(event) => {
                conditionSelected(event.target.value);
              }}
            >
              <option value="">Select Condition</option>
              {condition.map((con) => {
                return (
                  <option key={con} value={con}>
                    {con}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label>Gender: </label>
            <select
              name="gender"
              id=""
              value={gender}
              onChange={(event) => {
                genderSelected(event.target.value);
              }}
            >
              <option value="">Select Gender</option>
              <option value="Mens">Men</option>
              <option value="Womens">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>

          {/* conditionally renders depending on the cat selected */}
          <div>
            {category === 'snowboard' ? (
              <div>
                <label>Board Style: </label>
                <select
                  name="snowboardStyle"
                  id=""
                  value={snowboardStyleSearch}
                  onChange={(event) => {
                    snowboardStyleSelected(event.target.value);
                  }}
                >
                  <option value="">Select Style</option>
                  {snowboardStyle.map((style) => {
                    return (
                      <option key={style} value={style}>
                        {style}
                      </option>
                    );
                  })}
                </select>
              </div>
            ) : null}

            {category === 'ski' ? (
              <div>
                <div>
                  <label>Ski Style: </label>
                  <select
                    name="skiStyle"
                    id=""
                    value={skiStyleSearch}
                    onChange={(event) => {
                      skiStyleSelected(event.target.value);
                    }}
                  >
                    <option value="">Select Style</option>
                    {skiStyle.map((style) => {
                      return (
                        <option key={style} value={style}>
                          {style}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div>
                  <label>Ski Profile: </label>
                  <select
                    name="skiProfile"
                    id=""
                    value={profileSearch}
                    onChange={(event) => {
                      profileSelected(event.target.value);
                    }}
                  >
                    <option value="">Select Profile</option>
                    {profile.map((prof) => {
                      return (
                        <option key={prof} value={prof}>
                          {prof}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            ) : null}

            {category === 'snowboardBoots' || category === 'skiBoots' ? (
              <div>
                <label>Lacing System: </label>
                <select
                  name="lacing_system"
                  id=""
                  value={lacingSystemSearch}
                  onChange={(event) => {
                    lacingSystemSelected(event.target.value);
                  }}
                >
                  <option value="">Select Laces</option>
                  {lacing_system.map((system) => {
                    return (
                      <option key={system} value={system}>
                        {system}
                      </option>
                    );
                  })}
                </select>
              </div>
            ) : null}

            {category === 'skiBoots' ? (
              <div>
                <label>Boot Flex: </label>
                <select
                  name="flex"
                  id=""
                  value={flexSearch}
                  onChange={(event) => {
                    flexSelected(event.target.value);
                  }}
                >
                  <option value="">Select Laces</option>
                  {flex.map((flex) => {
                    return (
                      <option key={flex} value={flex}>
                        {flex}
                      </option>
                    );
                  })}
                </select>
              </div>
            ) : null}

            {category === 'helmet' ||
              category === 'apparel' ||
              category === 'snowboardBoots' ||
              category === 'skiBoots' ? (
              <div>
                <label>Size: </label>
                <select
                  name="size"
                  id=""
                  value={sizeSearch}
                  onChange={(event) => {
                    sizeSelected(event.target.value);
                  }}
                >
                  <option value="">Select Size</option>
                  {size.map((size) => {
                    return (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    );
                  })}
                </select>
              </div>
            ) : null}
          </div>
        </div>
      </List>
      <Divider />
      <div>
        <Button onClick={applyFilter}>Apply</Button>
        <br />
        <Button onClick={clearFilter}>Clear</Button>
      </div>
    </div>
  );

  return (
    <div className="filterContainer">
      {['top'].map((anchor) => (
        <React.Fragment key={anchor}>
          <button
            className="no-style-button icon-button"
            onClick={toggleDrawer(anchor, true)}
          >
            <img src="images/filter.svg" alt="" />
          </button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default FilterDrawer;
